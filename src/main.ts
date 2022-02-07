import { ApplicationCommandData, Client, Intents } from 'discord.js';
import dotenv from "dotenv";
import { commands, hander } from 'commands';

dotenv.config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });;

// ボット開始
client.once("ready", async () => {
  // コマンド登録
  const data: ApplicationCommandData[] = commands;
  await client.application?.commands.set(data);
  // 開始ログだけ出力する
  console.log("bot is ready");
});

client.on("interactionCreate", async (interaction) => {
  // コマンド以外を拒否する
  if (!interaction.isCommand()) {
    return;
  }

  // minecraftUp
  if (interaction.commandName === commands[0].name) {
    // 最初に何かしら返さないと応答エラーになる
    await interaction.reply('実行中です......');
    const res = await hander.handleMinecraftUp();
    await interaction.editReply(res);
  };

  // minecraftUp
  if (interaction.commandName === commands[1].name) {
    // 最初に何かしら返さないと応答エラーになる
    await interaction.reply('実行中です......');
    const res = await hander.handleMinecraftDown();
    console.log(res);
    await interaction.editReply(res);
  }
});

client.login(process.env.DISCODE_TOKEN);