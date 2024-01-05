import { Spinner } from "zmp-ui";
import AppLogo from 'assets/images/AppLogo.png'

interface LoadingStateProps {
  loadingLogo?: string
}

const LoadingState: React.FC<LoadingStateProps> = ({ loadingLogo }) => {
  return (
    <>
      <Spinner visible logo={loadingLogo ? loadingLogo : AppLogo} />
    </>
  )
}

export default LoadingState;