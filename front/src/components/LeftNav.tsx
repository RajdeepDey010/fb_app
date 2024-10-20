import Heading3 from "./ui/typography/Heading3"


function LeftNav() {
  const data = [
    {
      name: "John Doe",
      image: <img src="/dragon.jpg" width="36" height="36" style={{ borderRadius: "50%" }} alt="profile name" />
    },
    {
      name: "friend",
      image: <i
        data-visualcompletion="css-img"
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: 0,
          backgroundSize: 'auto',
          width: '36px',
          height: '36px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></i>
    },
    {
      name: "memories",
      image: <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: "0 -481px",
          backgroundSize: "auto",
          width: "36px",
          height: "36px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      ></i>
    },
    {
      name: "to save",
      image: <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: '0 -185px',
          backgroundSize: 'auto',
          width: '36px',
          height: '36px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></i>
    },
    {
      name: "group",
      image: <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: '0 -37px',
          backgroundSize: 'auto',
          width: '36px',
          height: '36px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></i>
    },
    {
      name: "video",
      image: <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: '0 -555px',
          backgroundSize: 'auto',
          width: '36px',
          height: '36px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></i>
    },
    {
      name: "Marketplace",
      image: <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/-GSeaf19sqF.png')",
          backgroundPosition: 0,
          backgroundSize: 'auto',
          width: '36px',
          height: '36px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></i>
    }
  ]

  return (
    <div className="w-1/5 px-4 py-2">
      <div className="space-y-3 overflow-y-auto max-h-full">
        {
          data.map((item) =>
            <div className="flex space-x-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              {item.image}
              <Heading3>{item.name}</Heading3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default LeftNav
