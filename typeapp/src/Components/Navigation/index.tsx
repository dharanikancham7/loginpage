import { useNavigate } from 'react-router-dom'
const Navigation = (Component: any) => {
    const Content = (props: any) => {
      const navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
    };
    return Content;
  };
  export default Navigation