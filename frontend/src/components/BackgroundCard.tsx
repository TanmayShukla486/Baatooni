import { Card, CardBody } from '@nextui-org/card';

interface BackgroundCardProps {
  children: React.ReactNode;
  className: string;
}

/**Will receive the width and height from the calling parent */
const BackgroundCard = ({ className, children }: BackgroundCardProps) => {
  return (
    <Card
      className={`${className}`}
      shadow="lg"
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default BackgroundCard;
