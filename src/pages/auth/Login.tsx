import { Button } from '@/components/ui/button'
import { FaEye } from 'react-icons/fa'
import WanjaIcon from '../../../src/assets/wanjaIcon.jpg'
import VaultLogo from '../../../src/assets/VaultLogo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '@/constants'
import { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa6'
const Login = () => {
  const navigate = useNavigate()
  const [request, setRequest] = useState({
    username: '',
    password: '',
  })
  const [isPassword, setIsPassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const handleLogin = async () => {
    setLoading(true)
    try {
      const { data } = await axios.post(`${BASE_URL}/user/login`, {
        username: request.username,
        password: request.password,
      })
      if (data.success) {
        localStorage.setItem('token', data?.accessToken)
        navigate('/home')
      }
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  return (
    <div className="h-screen">
      <div className="flex">
        <div
          className="w-1/3 flex flex-col justify-start"
          style={{
            backgroundImage: ` url(${WanjaIcon})`,
            backgroundRepeat: 'inherit',
            backgroundSize: 'contain',
          }}
        >
          <img
            src={VaultLogo}
            height={120}
            width={150}
            className="top-56  mt-[-40px] p-[5px] "
          />
        </div>
        <div className="w-2/3  flex flex-col">
          <div className="items-center flex justify-center h-screen">
            <div className="flex flex-col gap-4 w-[418px] ">
              <span className="text-[24px] font-bold">Sign In</span>

              <input
                placeholder="Username"
                className="outline-none border h-[48px] w-[370px] rounded-md px-2"
                value={request.username}
                onChange={(e) =>
                  setRequest({ ...request, username: e.target.value })
                }
              />
              <div className="flex w-[370px] h-[48px] bg-white mt-2 border items-center  rounded-md px-2">
                <input
                  placeholder="Password"
                  className="outline-none h-10 w-full"
                  type={isPassword ? 'password' : 'text'}
                  value={request.password}
                  onChange={(e) =>
                    setRequest({ ...request, password: e.target.value })
                  }
                />
                {isPassword ? (
                  <FaEye
                    className="mr-2"
                    onClick={() => setIsPassword(false)}
                  />
                ) : (
                  <FaEyeSlash
                    className="mr-2"
                    onClick={() => setIsPassword(true)}
                  />
                )}
              </div>
              <a href="" className="text-[14px] text-blue-600 my-[5px]">
                Forgot password?
              </a>
              <Button
                disabled={loading}
                className="w-[370px] h-[48px] bg-[#cb7529]"
                onClick={handleLogin}
              >
                {loading ? 'Signing In' : 'Sign In'}
              </Button>

              <div className="flex flex-col justify-end mt-[80px]">
                <div className="text-[13.2px]">
                  <span className="text-slate-500">
                    Protected by reCAPTCHA and subject to ICON’s
                  </span>{' '}
                  <strong>Privacy Policy</strong>
                  <br />
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
