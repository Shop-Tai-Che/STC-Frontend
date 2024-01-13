import api from 'zmp-sdk';

interface UseAuthProps {
  setIsNoPermission: React.Dispatch<React.SetStateAction<boolean>>;
}

const useAuth = ({ setIsNoPermission }: UseAuthProps) => {
  const login = async (actionGetOrCreateUser) => {
    try {
      await api.login({
        success: async () => {
          try {
            const { userInfo } = await api.getUserInfo();
            setIsNoPermission(false);
            await actionGetOrCreateUser(userInfo);
          } catch (error) {
            setIsNoPermission(true);
            console.error('getUserInfo | error ', error);
          }
        },
        fail: (error) => {
          console.error('login error', error);
        },
      });
    } catch (error) {
      setIsNoPermission(true);
      console.error('login error', error);
    }
  };

  return { login };
};
export default useAuth;
