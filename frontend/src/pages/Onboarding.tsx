import { Card, CardBody } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Hash, User, CircleArrowRight } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';
// import { Slider } from '@nextui-org/react';

const Onboarding = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [tag, setTag] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [src, setSrc] = useState<string>(
    'https://res.cloudinary.com/dcxb97jn7/image/upload/v1721230000/default-pfp.png'
  );

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onChangeBio = (e: ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selected = e.target.files?.[0];
    // console.log(selected);
    if (selected) {
      const data = new FormData();
      data.set('file', selected);
      data.set('upload_preset', 'ml_default');
      const cloudName = 'dcxb97jn7';
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const parsed = await response.json();
      setSrc(parsed.url);
    }
  };
  const onSubmit = async () => {
    const updateData = {
      img: src,
      tag: tag,
      bio: bio,
    };
    console.log(updateData);
  };
  const onClick = () => {
    uploadRef.current?.click();
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
            <div className="h-full flex-col justify-center mr-28 mt-12 w-[350px]">
              <div className="w-[75px] h-[75px] ml-32 mb-4 rounded-full">
                <Image
                  className="w-[75px] h-[75px] rounded-full transition hover:scale-150 ease-in duration-200"
                  src={src}
                />
              </div>
              <p className="text-3xl ml-16">Tell us about you</p>
              <div className="mt-[48px]">
                <div className="flex flex-between my-5">
                  <Hash className="mr-4 mt-4" />
                  <Input
                    type="text"
                    variant="faded"
                    label="How people will see you"
                    value={tag}
                    onChange={(e) => onChangeTag(e)}
                  />
                </div>
                <div className="flex flex-between my-5">
                  <User className="mr-4 mt-4" />
                  <Input
                    type="text"
                    variant="faded"
                    label="About you"
                    value={bio}
                    onChange={(e) => onChangeBio(e)}
                  />
                </div>
              </div>
              <Input
                type="file"
                className="hidden"
                ref={uploadRef}
                onChange={handleSelect}
              />
              <Button
                className="transition ml-36 hover:bg-gradient-to-br from-start to-end hover:scale-110 hover:z-20 duration-500"
                onClick={onClick}
              >
                Upload Image
              </Button>
            </div>
            <div className="absolute bottom-16 right-16">
              <Button className="w-12 h-12 bg-transparent rounded-full transition hover:z-20 hover:scale-125 ease-in duration-150 hover:bg-gradient-to-tr from-start to-end">
                <CircleArrowRight
                  className="w-12 h-12"
                  onClick={onSubmit}
                />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Onboarding;
