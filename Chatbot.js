module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot's data
		this.Bot_Age = 21;
		this.Bot_Name = "Nguyễn Quang Bảo Duy";
		this.Bot_University = "Duy Tân University";
		this.Bot_Country = "Egypt";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Message processing... 
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(message.indexOf("age") > -1 && message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you"))
		{
			return "I'm fine ^_^"
		}
		else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you"))
		{
			return "I live in" + this.Bot_Country;
		}
		else if(message.indexOf("what your name") > -1 && message.indexOf("name") && message.indexOf("your name"))
		{
			return "My name is" + this.Bot_Name;
		}
		return "Sorry, I didn't get it :( ";
	}


};