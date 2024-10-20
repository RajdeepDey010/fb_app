import { Box, Button, Modal, OutlinedInput} from '@mui/material'
import { useState } from 'react';
import Heading2 from '../../components/ui/typography/Heading2';
import Signup from '../signup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <div className="lg:w-1/2 flex items-center justify-start p-10">
          <div className="text-black text-left">
            <div style={{ width: '50%' }}>
              <img src="/facebook.svg" alt="fb" />
            </div>
            <Heading2>
              Facebook helps you connect and share with the people in your life.
            </Heading2>
            {/* <Typography variant="h5" className="font-bold mt-4">
              Facebook helps you connect and share with the people in your life.
            </Typography> */}
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
            <OutlinedInput
              sx={{ borderRadius: '6px' }}
              fullWidth
              className="mb-4"
              placeholder='Email address or phone number'
            />

            <OutlinedInput
              sx={{ borderRadius: '6px' }}
              fullWidth
              type="password"
              className="mb-6"
              placeholder='Password'
            />

            <Button
              sx={{ backgroundColor: '#0866ff', color: 'white', textTransform: 'none', fontWeight: 'bold', fontSize: '1.5em', borderRadius: '6px' }}
              fullWidth
              className="mb-4 font-bold "
            >
              Log in
            </Button>

            <div className="text-center mb-6">
              <a href="#" className="text-blue-600 hover:underline">
                Forgotten password?
              </a>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <Button
                sx={{ backgroundColor: '#42b72a', color: 'white', fontWeight: 'bold', fontSize: '1em', borderRadius: '5px', textTransform: 'none' }}
                color="success"
                onClick={handleOpen}
              >
                Create new account
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Signup/>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
