import React, { useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { RiMailSendLine } from 'react-icons/ri';
import { useToast } from '@chakra-ui/react';

const SubscribeButton = (props) => {

    const  [disable] = props
  const toast = useToast();

  useEffect(() => {
    const shouldShowToast = localStorage.getItem('showToastAfterReload');

    if (shouldShowToast === 'true') {
      toast({
        title: 'Subscribe successfully',
        status: 'success',
        isClosable: true,
        position: 'top-left',
        duration: 2000,
      });

      // Clear the flag to prevent the toast from showing on subsequent reloads
      localStorage.removeItem('showToastAfterReload');
    }
  }, []);

  const handleSubscribeClick = () => {
    localStorage.setItem('showToastAfterReload', 'true');
    // Reload the page
    window.location.reload();
  };

  return (
    <Button
      type="submit"
      mt={10}
      width={'100%'}
      bg={'#024190'}
      color={'white'}
      _hover={{ bg: '#FDB154' }}
      onClick={handleSubscribeClick}
      disabled={disable}
    >
      Subscribe
      <Box ml={2}>
        <RiMailSendLine />
      </Box>
    </Button>
  );
};

export default SubscribeButton;
