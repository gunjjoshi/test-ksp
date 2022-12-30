import { toast } from "react-hot-toast"
import { api } from "../../../utils/api"

export const updateNote = (
    id: number,
    title: string,
    subjectCode: string,
    batch: string,
    studyingClass: string,
    branch: string,
    url: string,
    isAnonymous: boolean,
    refetchNotes: Function
) => {
    toast.promise(
        api.put('/api/db/notes?id=' + id, {
            title,
            subjectCode,
            batch,
            studyingClass,
            branch,
            url,
            isAnonymous
        }),
        {
            loading: 'Updating...',
            success: (res) => {
                refetchNotes()
                return `${res.data.message}`
            },
            error: (err) => `Error: ${err.message}`
        }
    )
}