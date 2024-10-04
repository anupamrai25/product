import UserForm from '../components/UserForm';
import UserTable from './UserTable'
import auth from "./auth/page"

export default function Home() {
  return (
    <div>
      {/* <h1>User Information Form</h1>
      <UserForm /> */}
      <auth/>
      
      {/* <UserTable/> */}
    </div>
  );
}
