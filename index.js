const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const prefix = "addreact";


const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();

client1.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client1.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client1.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});


client1.login(process.env.token1);

client2.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client2.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client2.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client2.login(process.env.token2);

client3.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client3.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client3.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client3.login(process.env.token3);

client4.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client4.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client4.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client4.login(process.env.token4);

client5.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client5.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client5.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client5.login(process.env.token5);

client6.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client6.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client6.login(process.env.token6);

client7.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client7.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client7.login(process.env.token7);

client8.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client8.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client8.login(process.env.token8);

client9.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client9.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client9.login(process.env.token9);

client10.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client10.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client10.login(process.env.token10);

client11.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client11.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client11.login(process.env.token11);

client12.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client12.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client12.login(process.env.token12);

client13.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client13.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client13.login(process.env.token13);

client14.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client14.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client14.login(process.env.token14);

client15.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client15.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client15.login(process.env.token15);

client16.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client16.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client16.login(process.env.token16);

client17.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client17.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client17.login(process.env.token17);

client18.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client18.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client18.login(process.env.token18);

client19.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client19.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client19.login(process.env.token19);

client20.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client20.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client20.login(process.env.token20);

client21.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client21.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client21.login(process.env.token21);

client22.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client22.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client22.login(process.env.token22);

client23.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client23.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client23.login(process.env.token23);

client24.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client24.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client24.login(process.env.token24);

client25.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client25.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client25.login(process.env.token25);

client26.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client26.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client26.login(process.env.token26);

client27.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client27.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client27.login(process.env.token27);

client28.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client28.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client28.login(process.env.token28);

client29.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client29.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client29.login(process.env.token29);

client30.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client30.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client30.login(process.env.token30);

client36.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client36.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client36.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});


client36.login(process.env.token36);

client37.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client37.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client37.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client37.login(process.env.token37);

client38.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client38.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client38.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client38.login(process.env.token38);

client39.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client39.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client39.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client39.login(process.env.token39);

client40.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
    if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client40.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client40.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client40.login(process.env.token40);


client41.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client41.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client41.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client41.login(process.env.token41);


client42.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client42.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client42.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client42.login(process.env.token42);


client43.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client43.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client43.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client43.login(process.env.token43);


client44.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client44.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client44.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client44.login(process.env.token44);


client45.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client45.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client45.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client45.login(process.env.token45);


client46.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client46.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client46.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client46.login(process.env.token46);


client47.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client47.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client47.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client47.login(process.env.token47);


client48.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client48.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client48.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client48.login(process.env.token48);


client49.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client49.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client49.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client49.login(process.env.token49);

client50.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client50.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client50.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client50.login(process.env.token50);

client51.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client51.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client51.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client51.login(process.env.token51);

client52.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client52.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client52.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client52.login(process.env.token52);

client53.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client53.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client53.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client53.login(process.env.token53);

client54.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client54.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client54.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client54.login(process.env.token54);

client55.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client55.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client55.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client55.login(process.env.token55);
