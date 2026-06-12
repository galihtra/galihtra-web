"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";

type LogEntry = {
  id: string;
  command: string;
  output: React.ReactNode;
};

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "init-1",
      command: "",
      output: (
        <div className="text-gray-300">
          <span className="text-[var(--accent)] font-bold">Welcome to GalihOS v2.0.26</span>
          <br />
          Type <span className="text-yellow-400">/help</span> to see available commands.
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom whenever logs change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Focus input when clicking anywhere on the terminal window
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "/help":
        output = (
          <div className="flex flex-col gap-1 text-gray-300">
            <p className="font-bold text-white mb-2">Available Commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-yellow-400">/about</span><span>Show information about me</span>
              <span className="text-yellow-400">/skill</span><span>List my technical skills</span>
              <span className="text-yellow-400">/projects</span><span>View my recent work</span>
              <span className="text-yellow-400">/blog</span><span>Read my latest articles</span>
              <span className="text-yellow-400">/contact</span><span>Get my contact info</span>
              <span className="text-yellow-400">/clear</span><span>Clear the terminal screen</span>
            </div>
          </div>
        );
        break;

      case "/about":
        output = (
          <div className="text-gray-300">
            <p>Hi, I am <span className="text-[var(--accent)] font-bold">Galih Tri Risky Andiko</span>.</p>
            <p className="mt-2">I am a passionate developer focusing on building digital experiences that combine robust functionality with stunning aesthetics. I love creating web applications, UI/UX designs, and modern frontend architectures.</p>
          </div>
        );
        break;

      case "/skill":
        output = (
          <div className="text-gray-300">
            <p className="font-bold text-white mb-2">Technical Arsenal:</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'UI/UX Design', 'Frontend Dev'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white/10 text-[var(--accent)] rounded text-sm border border-white/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case "/projects":
        output = (
          <div className="text-gray-300">
            <p>Check out my latest projects in the <a href="/#projects" className="text-[var(--accent)] underline underline-offset-4">Projects Section</a> above!</p>
          </div>
        );
        break;

      case "/blog":
        output = (
          <div className="text-gray-300">
            <p>Read my latest articles and thoughts on the <a href="/blog" className="text-[var(--accent)] underline underline-offset-4">Blog Page</a>.</p>
          </div>
        );
        break;

      case "/contact":
        output = (
          <div className="text-gray-300">
            <p className="font-bold text-white mb-2">Let&apos;s talk business.</p>
            <div className="flex flex-col gap-2">
              <p>Email: <a href="mailto:hello@galih.com" className="text-[var(--accent)] underline underline-offset-4">hello@galih.com</a></p>
              <p>Instagram: <a href="#" className="text-yellow-400 hover:underline underline-offset-4">@galihtra</a></p>
              <p>LinkedIn: <a href="#" className="text-yellow-400 hover:underline underline-offset-4">Galih Tri Risky Andiko</a></p>
            </div>
          </div>
        );
        break;

      case "/clear":
        setLogs([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-red-400">
            Command not found: {cmd}. Type <span className="text-yellow-400">/help</span> for a list of commands.
          </div>
        );
    }

    setLogs(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        command: input,
        output
      }
    ]);
    setInput("");
  };

  return (
    <section className="relative pt-[120px] pb-[140px] z-10" id="contact">
      
      {/* Background Auroras */}
      <div className="absolute top-[20%] left-[50%] w-[800px] h-[800px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[120px] -translate-x-1/2 -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[5%] right-[-10%] w-[800px] h-[800px] bg-[#38bdf8]/30 rounded-full mix-blend-multiply filter blur-[150px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        
        {/* Header Text */}
        <div className="mb-12 text-center">
          <h2 className="text-[40px] md:text-[56px] font-[800] leading-[1.1] tracking-[-0.03em] mb-4 text-[#171717]">
            Interact with my <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-dark)] to-[#00cfb4]">Terminal</span>.
          </h2>
          <p className="text-lg text-[#525252] font-medium max-w-[600px] mx-auto">
            Try typing a command below to explore my skills, projects, and contact information directly from the source.
          </p>
        </div>

        {/* Massive Premium Glass Card holding the terminal */}
        <div className="relative bg-white/20 backdrop-blur-[50px] saturate-[200%] border border-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.07),inset_0_2px_8px_rgba(255,255,255,0.8)] rounded-[32px] p-4 md:p-8 overflow-hidden">
          
          {/* Inner Terminal Window (Dark Mode) */}
          <div 
            className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]"
            onClick={focusInput}
          >
            {/* Terminal MacOS Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex-1 flex justify-center items-center gap-2 text-gray-400 text-xs font-mono font-medium tracking-wider">
                <Terminal size={14} />
                galihtra@portfolio:~
              </div>
              {/* Spacer for symmetry */}
              <div className="w-[44px]"></div> 
            </div>

            {/* Terminal Body */}
            <div className="flex-1 overflow-y-auto p-6 font-mono text-sm md:text-base custom-scrollbar scroll-smooth">
              
              {/* History */}
              <div className="flex flex-col gap-4">
                {logs.map((log) => (
                  <div key={log.id} className="flex flex-col gap-2">
                    {log.command && (
                      <div className="flex gap-2">
                        <span className="text-[var(--accent)] font-bold">visitor@galih:~$</span>
                        <span className="text-white">{log.command}</span>
                      </div>
                    )}
                    <div className="pl-2">
                      {log.output}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Input */}
              <div className="flex gap-2 mt-4 items-center">
                <span className="text-[var(--accent)] font-bold">visitor@galih:~$</span>
                <form onSubmit={handleCommand} className="flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-transparent text-white outline-none font-mono caret-white"
                    spellCheck="false"
                    autoComplete="off"
                    autoFocus
                  />
                </form>
              </div>

              {/* Invisible element to auto-scroll to */}
              <div ref={bottomRef} className="h-4" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
