"use client"
import React, { useEffect, useState } from 'react'
import { db } from "../../../../../util/db"
import { MockInterview } from '../../../../../util/db/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb } from 'lucide-react'
import Recordanswer from "../_component/RecordAnswer"
import { Button } from '../../../../../components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
const page = ({ params }) => {
    const [interviewData, setinterviewData] = useState("")
    const [questions, setquestions] = useState([])
    const [loading, setloading] = useState(false)
    const [active, setactive] = useState(0)

    useEffect(() => {
        getInterviewDetails()
    }, [])

    const getInterviewDetails = async () => {
        setloading(true)
        try {
            const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId))

            if (result.length > 0 && result[0]?.jobMockResponse) {
                const jsonresponse = JSON.parse(result[0].jobMockResponse)
                console.log(jsonresponse.questions) // Ensure questions are logged properly
                setquestions(jsonresponse.questions) // Update questions state
            } else {
                console.error('No data found for this interview')
            }
        } catch (error) {
            console.error('Error fetching interview details:', error)
        } finally {
            setloading(false)
        }
    }
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    return questions && (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className='grid gap-[2rem] p-2 grid-cols-1 md:grid-cols-2'>
                        <div className='p-5 my-[3rem] border rounded-lg'>
                            <div className='m-[2rem] grid grid-cols-3 md:grid-cols-5 gap-4'>
                                {questions.length > 0 ? (
                                    questions.map((e, idx) => (
                                        <div key={idx} className={`rounded-lg ${active == idx ? "bg-primary" : "bg-[#bdbdbd]"}  p-3`}>
                                            Question {idx + 1}
                                        </div>
                                    ))
                                ) : (
                                    <p>Fetching questions...</p>
                                )}
                            </div>
                            <div className='border rounded-lg p-5'>
                                {questions[active]?.question}
                            </div>
                            <div className='bg-[#aeaeff] my-[2rem] border rounded-lg p-5'>
                                <Lightbulb />
                                <p>Note: Please read the questin carefully and click n record answer t record yur answer. After recording, please click on submit buttn to submit yur response.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Recordanswer />
                            <Button onClick={isRecording ? stopSpeechToText : startSpeechToText} className="mt-[2rem] border ">
                            {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </Button>
                        </div>
                        {/* <h1>Recording: {isRecording.toString()}</h1> */}
                        <div>
                            {/* <button >
                                {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </button> */}
                            <ul>
                                {results.map((result) => (
                                    <li key={result.timestamp}>{result.transcript}</li>
                                ))}
                                {interimResult && <li>{interimResult}</li>}
                            </ul>
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}

export default page
