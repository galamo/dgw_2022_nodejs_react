export default function ImageApp(props: { src: string }) {
    const defaultPicture = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
    return <img width={200} height={200} src={props.src || defaultPicture} />
}