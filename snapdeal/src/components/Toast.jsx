import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";
function Toast({success,text}) {
  const toast = useToast();
  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: `${success}`,
              status: success,
              isClosable: true,
            })
          }
        >
          {text}
        </Button>
      </WrapItem>
    </Wrap>
  );
}

export default Toast;
