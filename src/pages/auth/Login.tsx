import { Button } from '@/components/ui/button'
import { FaEye } from 'react-icons/fa'
import FacebookIcon from '../../../src/assets/facebook.svg'
import GoogleIcon from '../../../src/assets/google.svg'
import MicrosoftIcon from '../../../src/assets/microsoft.svg'
import WanjaIcon from '../../../src/assets/wanjaIcon.jpg'

const Login = () => {
  return (
    <div className="  mx-[20px] h-screen">
      <div className="flex ">
        <div
          className="w-1/3"
          style={{
            backgroundImage: ` url(${WanjaIcon})`,
            backgroundRepeat: 'inherit',
            backgroundSize: 'contain',
          }}
        >
          First Section
        </div>
        <div className="w-2/3  flex flex-col">
          <div className="flex justify-between">
            <p></p>
            <p className="flex justify-end items-end">
              Don’t have an account? Sign Up
            </p>
          </div>
          <div className="items-center flex justify-center h-[96vh]">
            <div className="flex flex-col gap-4 w-[418px] ">
              <span className="text-[24px] font-bold">Sign In</span>

              <input
                placeholder="Email address"
                className="outline-none border h-[48px] w-[370px] rounded-md px-2"
              />
              <div className="flex w-[370px] h-[48px] mt-2 border items-center  rounded-md px-2">
                <input
                  placeholder="Password"
                  className="outline-none h-10 w-full"
                />
                <FaEye className="mr-2" />
              </div>
              <a href="" className="text-[14px] text-blue-600 my-[5px]">
                Forgot password?
              </a>
              <Button className="w-[370px] h-[48px] bg-[#cb7529]">
                Sign In
              </Button>
              <div className="relative w-[370px] my-3">
                <div className="absolute inset-0 flex items-center ">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs ">
                  <span className="bg-background px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-[370px] gap-2">
                <div className="border w-[8rem] h-8 flex items-center justify-center rounded-md">
                  <img src={GoogleIcon} className="h-[15px] w-[30px]" />
                  <span className="text-[12px]">Google</span>
                </div>
                <div className="border w-[8rem] h-8 flex items-center justify-center rounded-md">
                  <img src={FacebookIcon} className="h-[20px] w-[30px]" />
                  <span className="text-[12px]">Facebook</span>
                </div>
                <div className="border w-[8rem] h-8 flex items-center justify-center rounded-md">
                  <img src={MicrosoftIcon} className="h-[12px] w-[30px]" />
                  <span className="text-[12px]">Microsoft</span>
                </div>
              </div>
              <div className="flex flex-col justify-end mt-[80px]">
                <div className="text-[14px]">
                  <span className="text-slate-500">
                    Protected by reCAPTCHA and subject to ICON’s
                  </span>{' '}
                  <strong>Privacy Policy</strong>
                  <br />
                  <span>and</span> <strong>Terms of Service</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
