import { RiseLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div
            className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
        >
            <RiseLoader size={100} color="#0700e5" />

        </div>
    )
}

export default Loader
