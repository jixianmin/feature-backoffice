import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: #20153c;
  position: relative;
`;

export const LeftImg = styled.div`
  width: 120px;
  height: 110px;
  bottom: 10%;
  left: 10%;
  background-image: url('https://internal.game.tiadev.net/ranking/img/profile/lobby_profile%20character_Fox.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  position: absolute;
`;

export const RightImg = styled.div`
  width: 120px;
  height: 110px;
  bottom: 10%;
  right: 10%;
  background-image: url('https://front.game.tiadev.net/_next/image?url=%2Fimg%2Fclosed-gold.png&w=256&q=75');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  position: absolute;
`;

export const AuthBox = styled.div`
  z-index: 1;
  margin: 0px 5vh 0px 5vh;
  max-width: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://front.game.tiadev.net/img/new/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
`;

export const AuthfirstBox = styled.div`
  width: 60%;
  height: 20%;
  background-image: url('https://front.game.tiadev.net/img/img_title.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
`;

export const AuthSecondBox = styled.div`
  width: 80%;
  height: 500px;
  background-image: url('https://front.game.tiadev.net/img/img_faq.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AuthTitleText = styled.div`
  font-size: 23px;
  color: white;
  font-weight: bolder;
`;

export const AuthWarning = styled.div`
  width: 80%;
  height: 70px;
  color: white;
  background-image: url('https://front.game.tiadev.net/img/img_submit.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3vh;
  margin-top: 20px;
  overflow: hidden;
`;

export const AuthText = styled.div`
  width: 80%;
  height: 20px;
  color: white;
  font-size: 18px;
`;

export const AuthInput = styled.input`
  width: 80%;
  height: 30px;
  padding: 1rem !important;
  border-radius: 10px !important;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5) !important;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.3) !important;
  color: hsla(0, 0%, 100%, 0.7) !important;
  border: none;
  margin: 20px 0px 20px 0px;
`;

export const AuthSecondBoxButton = styled.div`
  width: 50%;
  height: 70px;
  background-image: url('https://front.game.tiadev.net/img/img_submit.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  text-shadow: 1px 2px grey;
  padding-bottom: 10px;
`;
