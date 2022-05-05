# Bad Practice

```cs

using System;


interface IEmployee {
void loginForAttendance();
void washDishes();
void cookFood(string meal);
void cleanTheFloor();
}

class Dishwasher:IEmployee{

	public void loginForAttendance(){
	Console.WriteLine("I'm in");
	}

	public void washDishes(){

	Console.WriteLine("I am washing the Dishes");
	}
	public void cookFood(string meal){

	throw new Exception("It is not my responsibility");

	}
	public void cleanTheFloor(){

	throw new Exception("Dishwashers don't clean the floor");

	}
}


class Cleaner:IEmployee{

	public void loginForAttendance(){
	Console.WriteLine("I'm in");
	}
	public void washDishes(){

	throw new Exception("It is not my responsibility");
	}
	public void cookFood(string meal){

	throw new Exception("It is not my responsibility");

	}
	public void cleanTheFloor(){

	Console.WriteLine("I am cleaning the floor");

	}
}


class Cook: IEmployee {

	public void loginForAttendance(){

	Console.WriteLine("I'm in");
	}

	public void washDishes(){

	throw new Exception("It is not my responsibility");
	}
	public void cookFood(string meal){

	Console.WriteLine($"I am cooking {meal}");


	}
	public void cleanTheFloor(){

	throw new Exception("It is not my responsibility");

	}

}

public class Program
{
	public static void Main()
	{


	}
}



```

# Best Practive

```cs

using System;


interface IEmployee {

	void loginForAttendance();
}


interface IDishwasher{

	void washDishes();
}

interface ICook{

	void cookFood(string meal);
}

interface ICleaner{

	void cleanTheFloor();
}

class Dishwasher:IEmployee, IDishwasher{

	public void loginForAttendance(){
		Console.WriteLine("I'm in");
	}

	public void washDishes(){
		Console.WriteLine("I am washing the Dishes");
	}

}


class Cleaner:IEmployee, ICleaner{

	public void loginForAttendance(){
		Console.WriteLine("I'm in");
	}

	public void cleanTheFloor(){
		Console.WriteLine("I am cleaning the floor");
	}
}


class Cook: IEmployee, ICook {

	public void loginForAttendance(){
		Console.WriteLine("I'm in");
	}

	public void cookFood(string meal){
		Console.WriteLine($"I am cooking {meal}");
	}
}

public class Program
{
	public static void Main()
	{


	}
}
```
