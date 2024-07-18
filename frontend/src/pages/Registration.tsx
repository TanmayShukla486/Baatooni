import { Card, CardBody } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import { Mail, User, LockKeyhole, Phone } from 'lucide-react';

function isValidEmail(email: string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
function isValidPassword(password: string) {
  return password.length >= 8;
}

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [username, setUsername] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onMobileNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMobileNo(e.target.value);
  };
  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onSubmitClick = () => {
    if (!isValidEmail(email) && !isValidPassword(password)) {
      alert('Both email and password have been filled incorrectly');
      setEmail('');
      setPassword('');
      return;
    } else if (!isValidEmail(email)) {
      alert('Invalid email');
      setEmail('');
      return;
    } else if (!isValidPassword(password)) {
      alert('Password must have atleast 8 characters');
      setPassword('');
      return;
    }
    const newUser = {
      email,
      password,
      mobileNo,
      username,
    };
    setEmail('');
    setPassword('');
    setMobileNo('');
    setUsername('');
    console.log(newUser);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card
        className="w-2/3 h-4/5"
        shadow="lg"
      >
        <CardBody>
          <div className="flex justify-between overflow-hidden">
            <div className="w-1/2 h-5/6 px-2 pb-0 pt-0">
              <Image
                src="/register_image.png"
                className="rounded-b-xl"
              />
            </div>
            <div className="h-full flex-col justify-around mr-36 mt-12">
              <p className="text-3xl">Join Our Community</p>
              <div className="mt-[48px]">
                <div className="flex flex-between my-5">
                  <Mail className="mr-4 mt-4" />
                  <Input
                    type="email"
                    variant="faded"
                    label="Email"
                    onChange={(e) => onEmailChange(e)}
                    value={email}
                  />
                </div>
                <div className="flex flex-between my-5">
                  <Phone className="mr-4 mt-4" />
                  <Input
                    type="number"
                    variant="faded"
                    label="Mobile No"
                    onChange={(e) => onMobileNoChange(e)}
                    value={mobileNo}
                  />
                </div>
                <div className="flex flex-between my-5">
                  <User className="mr-4 mt-4" />
                  <Input
                    type="text"
                    variant="faded"
                    label="Username"
                    onChange={(e) => onUsernameChange(e)}
                    value={username}
                  />
                </div>
                <div className="flex flex-between my-5">
                  <LockKeyhole className="mr-4 mt-4" />
                  <Input
                    type="password"
                    variant="faded"
                    label="Password"
                    onChange={(e) => onPasswordChange(e)}
                    value={password}
                  />
                </div>
              </div>
              <Button
                className="ml-24"
                onPress={onSubmitClick}
              >
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Registration;
