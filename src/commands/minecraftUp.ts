import apiClient from "lib/apiClient";

const minecraftUp = {
  name: 'minecraft_up',
  description: 'マイクラサーバを起動して、接続先のIPを取得します。',
};

const handleMinecraftUp = async (): Promise<string> => {
  const message = await apiClient.get('ec2-up')
    .then((res: { data: string; }) => {
      return `マイクラ起動! IP→${res.data}`;
    })
    .catch(() => {
      return '既に起動しているか、起動に失敗しました。';
    });

  return message;
};

export {
  minecraftUp,
  handleMinecraftUp
};