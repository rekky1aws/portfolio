<script setup>
	/*const myAge = new Date(Date.parse("2002-03-15"));*/
	const myAge = new Date(Date.now() - Date.parse("2002-03-15")).getFullYear() - 1970;
</script>

<template>
	<article id="presentation">
		<h6>Presentation</h6>
		<p class="py-2 indent-4 first-letter:text-2xl text-justify">
			My name is Donatien, I'm {{ myAge}} and I grew up with the Internet, so I quickly became interested in how it works. I really liked it and it was only natural that I wanted to go further and finally decided to make it my profession. As I was having fun developing little games on my high school calculator, my math teacher at the time advised me to continue in this direction, in particular by taking algorithmics further with Python.
		</p>
		<p class="pb-2 indent-4 text-justify">
			After high school, I followed a computer science career path and applied for an engineering school: IG2I. And I was accepted! However, there was also industrial electricity on the curriculum and I didn't like it as much, although I think it was worth a try. After acquiring a solid grounding in C and, above all, in HTML, CSS, JavaScript, PHP and SQL, I decided to continue learning these technologies on my own, while looking for a course that would suit me better. The training I subsequently found at POP School and its trainers, with whom I was able to discover and learn to master Bootstrap, SASS, Tailwind, VueJS and Symfony.
		</p>
		<p class="pb-2 indent-4 text-justify">
			Today, I'm still just as passionate, if not more so, about IT and continue to set up new personal projects on a regular basis, adding to my GitHub account at the same time. And after obtaining my driver's license and my Professional Web and Mobile Web Developer qualification in the same year, I'm now looking for assignments in this field.
		</p>
		<p class="indent-4 text-justify">
			Of course, as much as I love development, it's not the only thing I do. And as I like to learn new things, I took up the guitar a few years ago, then the bass a few months later. I also draw, play computer-aided music, play rugby, play pinball, sew and, above all, I read a lot, both books and articles or documentation on the Internet. I also recently got into model making with some friends.
		</p>
	</article>
</template>

<style>
	
</style>