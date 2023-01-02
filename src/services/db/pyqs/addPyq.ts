import { toast } from 'react-hot-toast'
import { api } from '../../../utils/api'

interface Props {
    title: string
    subjectCode: string
    semester: string
    instructorId: number
    branch: string
    url: string
    isAnonymous: boolean
    refetch: Function
}

export const addPyq = ({
    title,
    subjectCode,
    branch,
    instructorId,
    isAnonymous,
    refetch,
    semester,
    url,
}: Props) => {
    console.log(
        title,
        subjectCode,
        semester,
        instructorId,
        branch,
        url,
        isAnonymous
    )
    toast.promise(
        api.post('/api/db/pyqs', {
            title,
            subjectCode,
            semester,
            instructorId,
            branch,
            url,
            isAnonymous,
        }),
        {
            loading: 'Adding...',
            success: (res) => {
                refetch()
                return `${res.data.message}`
            },
            error: (err) => `Error: ${err.message}`,
        }
    )
}
