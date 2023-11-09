import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // name:PlayStation
    // slug: playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.slug}
            color='gray.500'
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatFormIconList;
