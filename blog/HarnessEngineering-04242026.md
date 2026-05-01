# Weekend Reading - AI Models and Harness Engineering


Opus, GPT, Deepseek, Gemma 4 and Building Harness.

The world has moved from prompt engineering to context engineering then now to harness engineering. To me this is just software engineering. if you remember your operating system class - CPU is your agent, Memory is Conversation, Disk your Conversation History + Data. Tools - grep, ls, cat, sed etc, How do you make this all work? the harness - the OS is your harness.

You can build a harness in a day and it will open up lot of possibilities to explore your thinking.

## Harness Engineering

### Basic Harness with tool calls.

```
setup llm: LLM with tool calls configured
while (true):
  read user prompt ()
  read context from memory (like conversation-history.md)
  call llm with (context + prompt)
  send response ()

```

### Harness Engineering in Leaked Claude Code System

- Read leaked claude code architecture paper to understand the components of harness inside claude code: https://www.alphaxiv.org/abs/2604.14228



#####  Resources
Good overview of the architecture of agent harness: https://www.langchain.com/blog/the-anatomy-of-an-agent-harness

Martin Fowler (One of the early thinkers in SE): https://martinfowler.com/articles/harness-engineering.html

Agents need databases, auth etc so this project aims to provide: https://github.com/InsForge/InsForge

Ralph Loop: https://ghuntley.com/loop/

Open source harness library: https://github.com/HKUDS/OpenHarness

Anthropic Guide on harness: https://www.anthropic.com/engineering/harness-design-long-running-apps

Building Agents (Tips and Tricks): https://www.anthropic.com/engineering/building-effective-agents

An AI-driven agile development skill for building software (Lots of github stars)
https://github.com/bmad-code-org/BMAD-METHOD

Agentic Stack (Interesting project): https://github.com/codejunkie99/agentic-stack

## AI Model Updates
Claude Mythos - A new AI Model from Anthropic that has capability of detecting security issues in software. More info: https://red.anthropic.com/2026/mythos-preview/

GPT‑5.4‑Cyber: A new model from OpenAI for detecting security issues in software. This is similar to Mythos.

Opus 4.7 : https://www.anthropic.com/news/claude-opus-4-7

GPT 5.5 : https://openai.com/index/introducing-gpt-5-5/

Deepseek-V4: (Opensource) :
Gemma 4: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/


AI Layoff & Jobs - The good and the bad

The Good: The need for software engineers is growing but the skills are shifting and the bar is high. You don’t need to know the syntax or algorithms. You need to know Harness engineering + Software Engineering (System Design, Troubleshooting, Testing, Scaling, Security) + ML Engineering.

It’s a great time to build a small business (solo or few friends), if you are closed to people who are running businesses and need solutions to automate their business then you can help them out and build solutions using AI.

The Bad: There will be consolidation of jobs. Folks who are aging are at risk of loosing their job. Microsoft is offering voluntary retirement for folks. Meta laying off.

In the last few weeks meta and Microsoft announced reduction in labor force.


About Me:

LinkedIn: https://www.linkedin.com/in/sramakrishnaiah

I am available for consulting on Digital Transformation using AI, Cloud Cost Management, Agentic Software Architecture, Interview Prep and Career Coaching