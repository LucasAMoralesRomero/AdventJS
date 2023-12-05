function findFirstRepeated(gifts) 
{
      let position = gifts.length;
          let repeated;
                  for (let i = 0; i < gifts.length - 1; i++) 
                  {
                          for (let j = i + 1; j < gifts.length; j++) 
                          {
                                      if (gifts[i] === gifts[j] && position > j) 
                                      {
                                        repeated = gifts[i];
                                        position = j;
                                        }
                          }
                  }
                if (typeof repeated ==='undefined'){return -1;} return repeated;
}                                      
