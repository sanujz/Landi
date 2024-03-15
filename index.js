const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js')

const prefix = "addreact";


const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();

client1.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '694166467058466820') {
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
  const desiredUserID = '694166467058466820'; // The desired user ID

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
  if (message.content.startsWith('addreact') && message.author.id === '694166467058466820') {
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
  if (message.author.id === '694166467058466820') {
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
  const desiredUserID = '694166467058466820'; // The desired user ID

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
  if (message.content.startsWith('addreact') && message.author.id === '694166467058466820') {
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
    if (message.author.id === '694166467058466820') {
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
  const desiredUserID = '694166467058466820'; // The desired user ID

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
  if (message.content.startsWith('addreact') && message.author.id === '694166467058466820') {
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
  if (message.author.id === '694166467058466820') {
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
  const desiredUserID = '694166467058466820'; // The desired user ID

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
  if (message.content.startsWith('addreact') && message.author.id === '694166467058466820') {
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
  if (message.author.id === '694166467058466820') {
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
  const desiredUserID = '694166467058466820'; // The desired user ID

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
  if (message.content.startsWith('addreact') && message.author.id === '694166467058466820') {
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
