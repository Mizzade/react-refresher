function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  )
}



export function Toolbar({ onPlayMovie, onUploadImage}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  )
}
