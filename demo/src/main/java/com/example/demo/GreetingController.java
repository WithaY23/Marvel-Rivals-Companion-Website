package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}
	@GetMapping("/abcd")
	public Greeting abcd(@RequestParam(value= "a", defaultValue = "Null") String a){
		return new Greeting(counter.incrementAndGet(), a);
	}
	@GetMapping("/excl")
	public Exclamation exclaim(@RequestParam(value="exc") String exc)
	{
		return new Exclamation(counter.incrementAndGet(), exc);
	}
}

@RestController
@RequestMapping("/altered")
class GreetingAltered {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(1000, "STALE");
	}
	@GetMapping("/abcd")
	public Greeting abcd(@RequestParam(value= "a", defaultValue = "Null") String a){
		return new Greeting(2000, "STALE x2");
	}
	@GetMapping("/excl")
	public Exclamation exclaim()
	{
		return new Exclamation(1000000, "STALE SQUARED");
	}
}

