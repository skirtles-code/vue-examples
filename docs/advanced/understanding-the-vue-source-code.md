# Understanding the Vue Source Code

The Vue 3 source code can be found at <https://github.com/vuejs/core>.

Jumping into the Vue source code to learn how Vue works seems like a great idea, until you try it.

If you're new to Vue, or programming more generally, then you may be better off focusing your attention elsewhere. Writing applications is a much better way to get better at *using* Vue. Studying the Vue codebase is not required to use Vue. It can be really rewarding, but it isn't necessary.

Vue is a large, open-source codebase. If you haven't studied anything similar then you'll be in for a bit of a shock. The quality of the code is not a problem, it's just a very steep learning curve trying to get a grasp on what it all does.

The code is changing all the time, so any attempt to document it in any detail will quickly become obsolete. That said, I'm going to try to outline some general advice that might help you to get beyond the first hurdle. Much of this advice would be transferable to other codebases too, but I've tried to tailor it to Vue specifically.

There are lots of other ways to contribute to the project aside from writing code for Vue 3 itself. There are dozens of other official Vue repos for supporting libraries like Vue Router and Pinia, some of which are much smaller and easier to understand than Vue itself. They also tend to have a greater need for more maintainers. Helping out on [Discord](https://chat.vuejs.org/) is also a great way to contribute and learn, as you'll gain exposure to a wide range of use cases that you won't have seen in your own projects. See <https://vuejs.org/about/community-guide.html#what-you-can-do> for more ideas about how you might contribute.

Right, back to the Vue 3 core codebase...

## Prerequisites

Before you decide to press on, here's what you'll need to stand the best chance of understanding what's going on:

1. JavaScript knowledge is essential. TypeScript knowledge is a plus, but you can get a long way without it, so long as you understand enough to be able to ignore the types.
2. Make sure you know the documented API really well. If features like scoped slots or render functions are still a bit of a mystery then you aren't ready to start digging into the source.
3. Try to understand the different ways Vue is used. Do you know what the different builds do? See <https://unpkg.com/browse/vue/dist/> for a list of builds and <https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use> for an explanation.

## Getting Started

Be patient. Studying the code takes time.

Expect to be confused a lot when you first start. This might feel very uncomfortable. Your instincts might be telling you that it's important to understand everything and not to move on until you do. That's usually a great attitude to have, but you'll need to suppress it.

Start with a light skim through everything to get a feel for what's what. You'll need that mental scaffolding in place before you can start building up proper knowledge of how things work.

Beyond an initial skim, trying to study the code without a specific objective in mind is unlikely to make much progress.

Have a browse through the [Issues](https://github.com/vuejs/core/issues) and [PRs](https://github.com/vuejs/core/pulls) on GitHub (look at the closed/merged ones, not just the open ones). You can pick up a lot of the internal jargon that way. Looking through how past bugs were fixed will also give you something concrete to read and understand. Again, the objective isn't to understand everything, it's to pick up nuggets that you do understand that you can build on later.

Have a look through the [changelog](https://github.com/vuejs/core/blob/main/CHANGELOG.md). Try to pick up some of the jargon. It's often difficult to understand what exactly a change did based on the brief description in the changelog, but if you see one that sounds interesting, click through to see what change was made. Maybe you'll understand some of it, maybe you won't. You might feel like you're not learning anything, but even if you don't understand what the code does you'll be picking up knowledge around the edges. A bit like learning a foreign language, exposure can help you to learn the accent even if you don't understand the meaning of what's being said.

Stepping through the code in the debugger can be a really good way to study some features. Pick a specific feature and step into running code in your browser and walk through the code that way. That might not be viable for all features, so pick one that you can study that way, e.g. those that allow you to pass a function containing a `debugger` statement.

## Other Advice

Tools like the [Template Explorer](https://template-explorer.vuejs.org/) and [SFC Playground](https://play.vuejs.org/) allow you to see how Vue's template compiler and SFC compiler transform application code. If you're specifically interested in learning more about those features then those tools can help you to understand what the compilers do, before you try to study how they do it.

There are some really insightful videos of Evan speaking at conferences that might help to give a bit more background on the internals. I found this one useful, <https://www.youtube.com/watch?v=P_IsppdGPsw>, but there are plenty of others that touch on different things.

If you don't understand a particular bit of code, maybe try using **git blame** to see how that code came to be. You should be able to do that via the UI in either GitHub or your IDE. You'll often find that the original version of a file was much easier to understand and the weird and wonderful contortions were added later to address specific edge cases. Using blame to see what commits contributed to the current file can help to unpick those mysteries.

Don't worry too much about the tooling or the build process. You should make sure you can build locally and run the tests, but there's no need to dig into the details of all the tooling. You can if you want, it's all useful knowledge, but it's unlikely to teach you much about how Vue works.

Once you think you understand a part of the code, try changing it! Even if it's just some console logging to check you've understood correctly.

Be patient. Make sure you've prepared yourself mentally for not understanding what's going on. Knowing how to study a codebase like this is a skill in itself and it can take time to get the hang of it. The key is striking a balance. Sometimes you need to dig deeper to unpick the mysteries. Other times you need to move on and not worry about how the magic is done. Gradually that balance will shift, but initially it'll all feel like magic.
