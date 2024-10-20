import CloseIcon from '@mui/icons-material/Close';
import Heading3 from '../typography/Heading3';
import Button from '../Button';
import Heading2 from '../typography/Heading2';
import Photogrid from '../Photogrid';

function PostCard() {
  const imagePaths = [
    '/dragon.jpg',
    '/dragon.jpg',
    '/dragon.jpg',
    '/dragon.jpg'
  ];

  return (
    <div className='flex flex-col bg-white p-4 rounded-md'>
      <div className="row1 flex items-center justify-between">
        <div className="left flex items-center space-x-1">
          <Button className='bg-slate-500 rounded-full w-8 h-8'>P</Button>
          <Heading2><a href="#">Bula Dhar</a></Heading2>
          <a href="#">Follow</a>
        </div>
        <div className="right flex items-center">
          <Button className='bg-transparent hover:bg-slate-200 hover:rounded-full'><i className="fa-solid fa-ellipsis p-3"></i></Button>
          <Button className='bg-transparent hover:bg-slate-200 hover:rounded-full p-2'><CloseIcon className='' /></Button>
        </div>
      </div>

      <div className="row2">
        <Heading3>Well this amazing react library has it all sorted out for you , if the number of images are way too much it will automatically allow the users to convert it into an image carousel.</Heading3>
        
        {/* https://aenumair.medium.com/how-to-make-photo-grid-like-facebook-using-react-js-8792cc3c5263 */}
        <Photogrid props={imagePaths} className="w-full h-full bg-cover"/>
      </div>

      <div>Counts</div>
      <div>Actions</div>
      <div></div>
    </div>
  )
}

export default PostCard

