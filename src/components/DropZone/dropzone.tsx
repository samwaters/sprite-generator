import { useDropzone } from "react-dropzone"
import { useCallback } from "react"
import "./dropzone.scss"

export const DropZone = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
            isDragActive ?
                <p>Drop the files here</p> :
                <p>Drop files here or click to select</p>
        }
    </div>
}