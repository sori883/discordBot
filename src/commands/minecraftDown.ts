import apiClient from "lib/apiClient";

const minecraftDown = {
  name: 'minecraft_down',
  description: 'マイクラのサーバを停止します。',
};

const handleMinecraftDown = async (): Promise<string> => {
  const message = await apiClient.get('ec2-down')
    .then(() => {
      return 'マイクラを停止しました';
    })
    .catch(() => {
      return '既に停止しています。';
    });
  return message;
};

export {
  minecraftDown,
  handleMinecraftDown
};