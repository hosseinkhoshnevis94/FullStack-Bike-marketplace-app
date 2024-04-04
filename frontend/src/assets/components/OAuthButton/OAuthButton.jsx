import React from 'react'
import {Button} from "@nextui-org/react";


export default function OAuthButton({onClick,isDisabled}) {

  return (
    <Button isDisabled={isDisabled}  onClick={onClick}  variant="bordered"  color="danger" className="w-[50%] ">
    Continue with Google
  </Button>
  )
}
