'use client';

import { useState } from 'react';
import './styles.css';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState('intro');

  const chapters = {
    intro: {
      title: 'Introduction: The Architecture of Achievement',
      content: `
        <p>Success is not an accident. It is not a stroke of luck or a gift bestowed upon the fortunate few. Success is a deliberate construction—a building erected on pillars of discipline, focus, and unwavering commitment to principles that have stood the test of time.</p>

        <p>This book is your blueprint. Within these pages, you will discover not motivational platitudes, but actionable frameworks that transform intention into reality. You will learn that discipline is not restriction—it is freedom. Focus is not limitation—it is power. And the rules that govern success are not chains—they are the very foundation upon which extraordinary lives are built.</p>

        <p>The journey ahead demands honesty. It requires you to confront your current reality without excuse and commit to a path of continuous transformation. Are you ready to build the life you've always envisioned? Then turn the page, and let us begin.</p>
      `
    },
    discipline: {
      title: 'Chapter 1: The Discipline Paradigm',
      content: `
        <h3>Understanding True Discipline</h3>
        <p>Discipline is the bridge between goals and accomplishment. It is the daily choice to do what needs to be done, regardless of how you feel. Discipline is not punishment—it is self-respect translated into action.</p>

        <h3>The Three Levels of Discipline</h3>
        <ul>
          <li><strong>Physical Discipline:</strong> Mastering your body through consistent exercise, proper nutrition, and adequate rest. Your body is the vessel through which all achievement flows.</li>
          <li><strong>Mental Discipline:</strong> Training your mind to focus, resist distraction, and maintain clarity under pressure. Mental discipline is the difference between knowing and doing.</li>
          <li><strong>Emotional Discipline:</strong> Controlling your reactions, managing impulses, and maintaining composure in adversity. Emotions are data, not directives.</li>
        </ul>

        <h3>The Discipline Formula</h3>
        <p><strong>Discipline = Decision + Action + Repetition</strong></p>
        <p>First, you decide what must be done. Then, you act without hesitation. Finally, you repeat until the action becomes automatic. This is how discipline is forged.</p>

        <h3>Daily Discipline Practices</h3>
        <ol>
          <li><strong>The Morning Protocol:</strong> Wake at the same time daily. No negotiation. The morning victory sets the tone for all that follows.</li>
          <li><strong>The Non-Negotiable Task:</strong> Identify one critical task each day that must be completed before anything else. Do it first.</li>
          <li><strong>The Evening Review:</strong> Spend 10 minutes reflecting on what you accomplished and planning tomorrow. Awareness breeds improvement.</li>
          <li><strong>The Physical Commitment:</strong> Move your body daily, even for 20 minutes. Physical discipline strengthens mental resolve.</li>
          <li><strong>The Constraint Practice:</strong> Deliberately deny yourself something small each day. Practice delayed gratification to strengthen your willpower muscle.</li>
        </ol>

        <blockquote>"Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all." — George Washington</blockquote>
      `
    },
    focus: {
      title: 'Chapter 2: The Focus Framework',
      content: `
        <h3>The Attention Economy</h3>
        <p>We live in an age of infinite distraction. Your attention is under constant siege by forces designed to fragment your focus and hijack your potential. Those who master focus in the modern era gain an asymmetric advantage.</p>

        <h3>The Three Enemies of Focus</h3>
        <ul>
          <li><strong>Digital Distraction:</strong> Notifications, social media, and endless content consumption destroy deep work capacity.</li>
          <li><strong>Decision Fatigue:</strong> Too many choices drain cognitive resources needed for important work.</li>
          <li><strong>Lack of Clarity:</strong> Without clear objectives, your mind wanders to whatever seems urgent rather than what is important.</li>
        </ul>

        <h3>The Focus Architecture</h3>

        <h4>1. Environmental Design</h4>
        <p>Your environment shapes your behavior. Design your space for focus:</p>
        <ul>
          <li>Remove all digital devices from your primary workspace</li>
          <li>Create a dedicated zone for deep work</li>
          <li>Use visual cues that trigger focus mode (specific lighting, music, or objects)</li>
        </ul>

        <h4>2. Time Blocking</h4>
        <p>Assign specific tasks to specific time blocks. Treat these blocks as sacred appointments with yourself.</p>
        <ul>
          <li><strong>Deep Work Blocks:</strong> 90-120 minute sessions of uninterrupted focus on your most important work</li>
          <li><strong>Shallow Work Blocks:</strong> Batch email, meetings, and administrative tasks</li>
          <li><strong>Recovery Blocks:</strong> Scheduled breaks to prevent burnout and maintain cognitive performance</li>
        </ul>

        <h4>3. The Single Target Protocol</h4>
        <p>At any given moment, work on exactly one thing. Multitasking is a myth that destroys both quality and speed.</p>

        <h3>Focus Rituals</h3>
        <ol>
          <li><strong>The Pre-Work Ritual:</strong> 5 minutes of preparation before each focus session. Review objectives, clear space, eliminate distractions.</li>
          <li><strong>The Pomodoro Adaptation:</strong> 50 minutes focused work, 10 minutes complete rest. Four cycles, then a longer 30-minute break.</li>
          <li><strong>The Weekly Clarity Session:</strong> 30 minutes every Sunday to identify your three most important objectives for the week.</li>
          <li><strong>The Digital Sunset:</strong> All screens off 90 minutes before sleep. Protect your recovery.</li>
        </ol>

        <blockquote>"The successful warrior is the average man, with laser-like focus." — Bruce Lee</blockquote>
      `
    },
    rules: {
      title: 'Chapter 3: The Immutable Rules of Success',
      content: `
        <h3>Rule 1: You Are Your Standards</h3>
        <p>You do not rise to the level of your goals. You fall to the level of your standards. Set your standards high, and refuse to compromise them for temporary comfort.</p>

        <h3>Rule 2: Action Precedes Motivation</h3>
        <p>Waiting to feel motivated is a losing strategy. Take action first, and motivation follows. Motion creates emotion.</p>

        <h3>Rule 3: Progress Requires Measurement</h3>
        <p>What gets measured gets managed. Track your key metrics daily. Numbers don't lie, and they reveal truth that feelings obscure.</p>

        <h3>Rule 4: Environment Beats Willpower</h3>
        <p>Design your surroundings to make good decisions automatic and bad decisions difficult. Willpower is finite; smart systems are infinite.</p>

        <h3>Rule 5: Consistency Trumps Intensity</h3>
        <p>One hour daily beats occasional heroic efforts. Small actions, repeated consistently, create compound returns that intensity alone cannot match.</p>

        <h3>Rule 6: Comfort Is the Enemy of Growth</h3>
        <p>Your comfort zone is a beautiful place, but nothing ever grows there. Deliberately seek discomfort. It is the price of expansion.</p>

        <h3>Rule 7: Input Determines Output</h3>
        <p>What you consume—information, food, relationships—directly shapes your results. Guard your inputs ruthlessly.</p>

        <h3>Rule 8: Speed Matters</h3>
        <p>Execution speed is a competitive advantage. Bias toward action. Perfect is the enemy of done, and done is the engine of learning.</p>

        <h3>Rule 9: Identity Drives Behavior</h3>
        <p>Don't chase outcomes. Build identity. Don't try to lose weight; become a healthy person. Don't try to write; become a writer. Your actions flow from who you believe you are.</p>

        <h3>Rule 10: Failure Is Data</h3>
        <p>Failure is not defeat—it is feedback. Each failure contains lessons that success conceals. Extract the data, adjust course, continue forward.</p>

        <h3>Rule 11: Energy Is Your Primary Resource</h3>
        <p>Manage energy, not just time. All achievement requires energy. Sleep, nutrition, movement, and recovery are not optional—they are fundamental.</p>

        <h3>Rule 12: Compound Interest Applies to Everything</h3>
        <p>Small improvements compound exponentially. A 1% improvement daily equals a 37x improvement over a year. Be patient with results, urgent with action.</p>

        <blockquote>"Rules are what the artist breaks; the memorable never emerged from a formula." — Bill Bernbach. Yet ironically, it is mastery of fundamental rules that grants the freedom to break them wisely.</blockquote>
      `
    },
    pillars: {
      title: 'Chapter 4: The Five Pillars of Success',
      content: `
        <h3>The Foundation Principle</h3>
        <p>Success is not built on a single strength but on multiple pillars working in concert. Neglect one, and the entire structure weakens. Master all five, and you become unstoppable.</p>

        <h3>Pillar 1: Physical Vitality</h3>
        <p>Your body is the hardware that runs all software. Without energy, focus, and health, all other pillars crumble.</p>
        <h4>Implementation:</h4>
        <ul>
          <li>Sleep 7-9 hours nightly, non-negotiable</li>
          <li>Exercise 4-6 times weekly, combining strength and cardiovascular work</li>
          <li>Eat whole foods, primarily plants, with adequate protein</li>
          <li>Hydrate consistently—aim for half your body weight in ounces daily</li>
          <li>Practice stress management through meditation, breathwork, or nature exposure</li>
        </ul>

        <h3>Pillar 2: Mental Mastery</h3>
        <p>Your mind is your most powerful tool or your greatest liability. Train it deliberately.</p>
        <h4>Implementation:</h4>
        <ul>
          <li>Read 30 minutes daily from challenging, non-fiction material</li>
          <li>Practice deep work sessions of 90+ minutes</li>
          <li>Learn continuously—acquire one new skill per quarter</li>
          <li>Journal daily to process thoughts and extract insights</li>
          <li>Meditate 10-20 minutes daily to build mental clarity and emotional regulation</li>
        </ul>

        <h3>Pillar 3: Emotional Intelligence</h3>
        <p>Success requires the ability to navigate complex human dynamics, manage your own emotions, and influence others positively.</p>
        <h4>Implementation:</h4>
        <ul>
          <li>Develop self-awareness through regular reflection and feedback</li>
          <li>Practice empathy—genuinely seek to understand others' perspectives</li>
          <li>Build relationship skills through active listening and clear communication</li>
          <li>Manage stress and emotional triggers proactively</li>
          <li>Cultivate gratitude and optimism without denying reality</li>
        </ul>

        <h3>Pillar 4: Financial Acumen</h3>
        <p>Money is a tool that amplifies freedom and options. Master it, or it will master you.</p>
        <h4>Implementation:</h4>
        <ul>
          <li>Track every dollar—awareness precedes control</li>
          <li>Live below your means—create margin for investment</li>
          <li>Build multiple income streams to reduce dependency</li>
          <li>Invest consistently—automate savings and investments</li>
          <li>Learn continuously about wealth-building principles</li>
        </ul>

        <h3>Pillar 5: Meaningful Contribution</h3>
        <p>True success transcends personal achievement. It lies in creating value for others and leaving a positive legacy.</p>
        <h4>Implementation:</h4>
        <ul>
          <li>Identify your unique strengths and how they serve others</li>
          <li>Build skills that solve real problems for real people</li>
          <li>Give generously of time, knowledge, and resources</li>
          <li>Mentor others on the path behind you</li>
          <li>Measure success not just by what you accumulate, but by what you contribute</li>
        </ul>

        <h3>The Integration Practice</h3>
        <p>Weekly, review all five pillars. Rate yourself 1-10 on each. Focus your improvement efforts on the weakest pillar—it is the constraint limiting your overall success.</p>

        <blockquote>"The whole is greater than the sum of its parts." — Aristotle. Your five pillars, working together, create synergies that exponentially multiply your results.</blockquote>
      `
    },
    systems: {
      title: 'Chapter 5: Building Unbreakable Systems',
      content: `
        <h3>Systems Over Goals</h3>
        <p>Goals are destinations. Systems are vehicles. Focus on building robust systems, and goals take care of themselves.</p>

        <h3>The System Design Principles</h3>

        <h4>1. Automaticity</h4>
        <p>Design systems that require minimal willpower. Use:</p>
        <ul>
          <li><strong>Triggers:</strong> Link new behaviors to existing habits ("After I pour my coffee, I will review my three priorities")</li>
          <li><strong>Environment Design:</strong> Make good choices the default, bad choices inconvenient</li>
          <li><strong>Removal of Decision Points:</strong> Decide once, act repeatedly (same breakfast, same workout time, same planning routine)</li>
        </ul>

        <h4>2. Measurement</h4>
        <p>Build tracking into your systems:</p>
        <ul>
          <li>Use a simple tracking sheet or app</li>
          <li>Track inputs (actions you take) not just outputs (results)</li>
          <li>Review metrics weekly to identify patterns</li>
        </ul>

        <h4>3. Iteration</h4>
        <p>Your first system design will be flawed. That's expected. Build feedback loops:</p>
        <ul>
          <li>Weekly review: What's working? What's not?</li>
          <li>Monthly audit: Are your systems still aligned with your objectives?</li>
          <li>Quarterly redesign: Update systems as you evolve</li>
        </ul>

        <h3>Core Systems to Build</h3>

        <h4>The Morning System</h4>
        <p>First two hours determine the day. Design a non-negotiable sequence:</p>
        <ol>
          <li>Wake at same time (no snooze)</li>
          <li>Hydrate (16oz water)</li>
          <li>Move (10-60 minutes exercise)</li>
          <li>Nourish (high-protein breakfast)</li>
          <li>Focus (review priorities, plan day)</li>
          <li>Prime (meditation, journaling, or reading)</li>
        </ol>

        <h4>The Work System</h4>
        <ol>
          <li>Identify your three most important tasks the night before</li>
          <li>Complete your most important task first thing (before email or meetings)</li>
          <li>Batch similar tasks (all calls together, all emails together)</li>
          <li>Use time blocking to protect deep work</li>
          <li>End workday with tomorrow's planning</li>
        </ol>

        <h4>The Recovery System</h4>
        <ol>
          <li>Hard stop time for work (no flexibility)</li>
          <li>Evening routine (same sequence nightly)</li>
          <li>Digital sunset (screens off 90 min before sleep)</li>
          <li>Sleep preparation (cool room, dark, quiet)</li>
          <li>Consistent sleep and wake times (even weekends)</li>
        </ol>

        <h4>The Learning System</h4>
        <ol>
          <li>Read 30 minutes daily</li>
          <li>Take notes on key insights</li>
          <li>Implement one idea per book</li>
          <li>Teach what you learn to solidify understanding</li>
          <li>Review notes quarterly</li>
        </ol>

        <h4>The Relationship System</h4>
        <ol>
          <li>Schedule regular connection time with key relationships</li>
          <li>Practice active listening (no phone during conversations)</li>
          <li>Express appreciation regularly</li>
          <li>Address conflicts promptly and directly</li>
          <li>Give without expectation of return</li>
        </ol>

        <h3>The System Integration Map</h3>
        <p>Create a visual map of how your systems interconnect. Your morning system fuels your work system. Your recovery system enables your morning system. Your learning system improves all other systems. See the web, not just the strands.</p>

        <blockquote>"You do not rise to the level of your goals. You fall to the level of your systems." — James Clear</blockquote>
      `
    },
    obstacles: {
      title: 'Chapter 6: Conquering Common Obstacles',
      content: `
        <h3>Obstacle 1: Procrastination</h3>
        <h4>The Root Cause</h4>
        <p>Procrastination is not laziness. It's fear—fear of failure, fear of judgment, fear of discomfort, or fear of success.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>The 2-Minute Rule:</strong> If starting seems overwhelming, commit to just 2 minutes. Starting dissolves resistance.</li>
          <li><strong>Implementation Intention:</strong> Replace "I need to work out" with "At 6am, I will be at the gym." Specificity kills procrastination.</li>
          <li><strong>Fear Setting:</strong> Write down worst-case scenarios. Face your fears directly to strip them of power.</li>
        </ul>

        <h3>Obstacle 2: Inconsistency</h3>
        <h4>The Root Cause</h4>
        <p>Relying on motivation rather than systems. Motivation is fickle; systems are reliable.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>Habit Stacking:</strong> Attach new behaviors to established routines</li>
          <li><strong>Never Miss Twice:</strong> One miss is acceptable. Two is the beginning of a new pattern. Never miss twice.</li>
          <li><strong>Visual Tracking:</strong> Use a calendar and mark X for each day you complete the behavior. Don't break the chain.</li>
        </ul>

        <h3>Obstacle 3: Overwhelm</h3>
        <h4>The Root Cause</h4>
        <p>Too many priorities means no priorities. Lack of clarity creates paralysis.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>The ONE Thing:</strong> Ask, "What's the ONE thing I can do such that by doing it, everything else becomes easier or unnecessary?"</li>
          <li><strong>Brain Dump:</strong> Write everything down to clear mental clutter, then prioritize ruthlessly</li>
          <li><strong>The 80/20 Rule:</strong> Identify the 20% of actions that produce 80% of results. Eliminate or delegate the rest.</li>
        </ul>

        <h3>Obstacle 4: Burnout</h3>
        <h4>The Root Cause</h4>
        <p>Sustained effort without adequate recovery. You cannot sprint a marathon.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>Strategic Recovery:</strong> Schedule rest as rigorously as you schedule work</li>
          <li><strong>Oscillation:</strong> Alternate between stress and recovery. Growth happens during recovery, not just effort.</li>
          <li><strong>Energy Audit:</strong> Track what drains and what energizes you. Maximize energizers, minimize drains.</li>
        </ul>

        <h3>Obstacle 5: Negative Self-Talk</h3>
        <h4>The Root Cause</h4>
        <p>Unchallenged limiting beliefs create self-fulfilling prophecies.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>Cognitive Reframing:</strong> Challenge negative thoughts. Ask, "Is this thought true? Is it helpful?"</li>
          <li><strong>Evidence Collection:</strong> Keep a success journal. Record evidence that contradicts limiting beliefs.</li>
          <li><strong>Identity Shift:</strong> Change "I'm not good at X" to "I'm developing skill in X."</li>
        </ul>

        <h3>Obstacle 6: Distraction Addiction</h3>
        <h4>The Root Cause</h4>
        <p>Technology designed to hijack attention, combined with lack of environmental discipline.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>Phone Lockbox:</strong> Physical separation during focus work</li>
          <li><strong>App Blockers:</strong> Use Freedom, Cold Turkey, or similar tools during work hours</li>
          <li><strong>Notification Zero:</strong> Turn off all non-essential notifications permanently</li>
          <li><strong>Batch Processing:</strong> Check email/messages at designated times only (e.g., 11am, 3pm)</li>
        </ul>

        <h3>Obstacle 7: Lack of Accountability</h3>
        <h4>The Root Cause</h4>
        <p>Private goals are easy to abandon. Public commitment creates pressure.</p>
        <h4>The Solution</h4>
        <ul>
          <li><strong>Accountability Partner:</strong> Share goals weekly with someone who will hold you to your word</li>
          <li><strong>Public Declaration:</strong> Announce your commitment publicly to create social pressure</li>
          <li><strong>Skin in the Game:</strong> Create financial stakes (e.g., Stickk.com) where failure costs money</li>
        </ul>

        <blockquote>"The impediment to action advances action. What stands in the way becomes the way." — Marcus Aurelius</blockquote>
      `
    },
    implementation: {
      title: 'Chapter 7: The 90-Day Transformation Protocol',
      content: `
        <h3>Why 90 Days?</h3>
        <p>90 days is long enough to build sustainable habits and see meaningful results, yet short enough to maintain intensity and focus. This is your sprint toward a new baseline.</p>

        <h3>Phase 1: Foundation (Days 1-30)</h3>
        <h4>Objective: Build Core Habits</h4>

        <h4>Week 1-2: The Basics</h4>
        <ul>
          <li>Establish consistent wake and sleep times (same every day)</li>
          <li>Implement morning routine (start with 30 minutes)</li>
          <li>Begin daily tracking of three priorities</li>
          <li>Start 20-minute daily movement practice</li>
          <li>Remove digital distractions from bedroom</li>
        </ul>

        <h4>Week 3-4: Expansion</h4>
        <ul>
          <li>Add evening planning ritual (10 minutes)</li>
          <li>Implement time blocking for work</li>
          <li>Start daily reading (15 minutes minimum)</li>
          <li>Begin weekly review practice (30 minutes every Sunday)</li>
          <li>Identify and eliminate one major time-waster</li>
        </ul>

        <h3>Phase 2: Acceleration (Days 31-60)</h3>
        <h4>Objective: Increase Capacity and Skill</h4>

        <h4>Week 5-6: Depth</h4>
        <ul>
          <li>Extend morning routine to 60 minutes</li>
          <li>Implement 90-minute deep work sessions</li>
          <li>Add skill development practice (30 min daily)</li>
          <li>Increase exercise to 4-5 days per week</li>
          <li>Start meditation practice (10 minutes daily)</li>
        </ul>

        <h4>Week 7-8: Integration</h4>
        <ul>
          <li>Audit all five pillars (rate 1-10 on each)</li>
          <li>Address weakest pillar with specific action plan</li>
          <li>Implement batching for administrative tasks</li>
          <li>Extend reading to 30 minutes daily</li>
          <li>Begin teaching what you're learning (blog, journal, or conversation)</li>
        </ul>

        <h3>Phase 3: Optimization (Days 61-90)</h3>
        <h4>Objective: Refine Systems and Lock In Habits</h4>

        <h4>Week 9-10: Refinement</h4>
        <ul>
          <li>Review all systems for friction points—eliminate or smooth them</li>
          <li>Increase deep work to two 90-minute sessions daily</li>
          <li>Implement monthly goal-setting and review process</li>
          <li>Add advanced recovery practices (sauna, cold exposure, massage, etc.)</li>
          <li>Audit relationships—strengthen positive, distance from negative</li>
        </ul>

        <h4>Week 11-12: Mastery</h4>
        <ul>
          <li>Extend meditation to 20 minutes daily</li>
          <li>Implement quarterly planning for next 90 days</li>
          <li>Document your transformation (write your story)</li>
          <li>Identify one person to mentor or share learnings with</li>
          <li>Celebrate progress without losing discipline</li>
        </ul>

        <h3>Daily Non-Negotiables (All 90 Days)</h3>
        <ol>
          <li>Wake at consistent time</li>
          <li>Complete morning routine</li>
          <li>Accomplish top priority task first</li>
          <li>Move your body</li>
          <li>Read for growth</li>
          <li>Plan tomorrow</li>
          <li>Sleep 7-9 hours</li>
        </ol>

        <h3>Weekly Non-Negotiables (All 12 Weeks)</h3>
        <ol>
          <li>30-minute weekly review (what worked, what didn't, what to adjust)</li>
          <li>Plan three most important objectives for coming week</li>
          <li>Audit five pillars (rate yourself 1-10 on each)</li>
          <li>One day of complete rest (no work, no obligation)</li>
        </ol>

        <h3>Tracking Your Transformation</h3>
        <p>Create a simple spreadsheet with these columns:</p>
        <ul>
          <li>Date</li>
          <li>Wake Time</li>
          <li>Morning Routine (Yes/No)</li>
          <li>Top Priority Completed (Yes/No)</li>
          <li>Exercise (Yes/No)</li>
          <li>Reading (Yes/No)</li>
          <li>Evening Planning (Yes/No)</li>
          <li>Sleep Hours</li>
          <li>Daily Win (one sentence)</li>
        </ul>

        <p>Track every day. At day 90, you'll have undeniable evidence of your transformation.</p>

        <h3>What Happens After 90 Days?</h3>
        <p>This is not the end—it's the new baseline. Your systems are now established. Your discipline is now automatic. Your focus is now your superpower. Now, you scale. Set the next 90-day sprint with elevated targets. The compound effect begins to multiply.</p>

        <blockquote>"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle</blockquote>
      `
    },
    conclusion: {
      title: 'Conclusion: Your Success Is Inevitable',
      content: `
        <h3>The Truth About Success</h3>
        <p>Success is not mysterious. It is not reserved for the talented, the fortunate, or the connected. Success is the inevitable outcome of disciplined action, sustained focus, and unwavering commitment to proven principles.</p>

        <p>You now possess the blueprint. You understand that discipline is not restriction but freedom. You know that focus is not limitation but power. You recognize that the rules of success are not constraints but the very architecture upon which extraordinary lives are built.</p>

        <h3>The Five Pillars Stand Before You</h3>
        <ul>
          <li><strong>Physical Vitality:</strong> The energy to execute</li>
          <li><strong>Mental Mastery:</strong> The clarity to strategize</li>
          <li><strong>Emotional Intelligence:</strong> The wisdom to navigate</li>
          <li><strong>Financial Acumen:</strong> The resources to leverage</li>
          <li><strong>Meaningful Contribution:</strong> The purpose to sustain</li>
        </ul>

        <p>Build each pillar with care. Strengthen the weak points. Let each pillar support the others.</p>

        <h3>The Choice Is Binary</h3>
        <p>You can read this book and feel momentarily inspired, only to return to your old patterns. Or you can decide—truly decide—that today marks the beginning of a different trajectory.</p>

        <p>You can continue to live by default, reacting to circumstances, hoping for change. Or you can live by design, creating circumstances, making change inevitable.</p>

        <h3>The 90-Day Commitment</h3>
        <p>I challenge you to commit to the 90-Day Transformation Protocol. Not partially. Not when convenient. Fully. Completely. Without negotiation.</p>

        <p>Track every day. Honor your non-negotiables. Build your systems. Face your obstacles. And watch as your life transforms not through motivation or luck, but through the compound effect of disciplined action.</p>

        <h3>Your Future Self Is Watching</h3>
        <p>The person you will become in 90 days, 365 days, 5 years—that person is watching you right now. They are watching to see if you will do what needs to be done. They are waiting to see if you will honor the potential they represent.</p>

        <p>Will you make them proud? Or will you sentence them to a life of unrealized potential and quiet regret?</p>

        <h3>The Time Is Now</h3>
        <p>Not tomorrow. Not next Monday. Not after this busy period ends. Now.</p>

        <p>Close this book. Open your calendar. Block time for your morning routine tomorrow. Set your alarm. Prepare your environment. Decide on your three priorities.</p>

        <p>The architecture of achievement is not complex, but it is demanding. It requires you to show up when you don't feel like it. To persist when results are invisible. To trust the process when doubt creeps in.</p>

        <h3>Final Words</h3>
        <p>You are capable of far more than you currently imagine. The gap between where you are and where you could be is not talent, luck, or circumstance. It is simply action—consistent, disciplined, focused action applied over time.</p>

        <p>Everything you need is within you. Everything you need to know is in these pages. The only question that remains is this:</p>

        <p><strong>Will you do the work?</strong></p>

        <p>Your success is not a matter of chance. With the principles in this book, applied with consistency and commitment, your success is inevitable.</p>

        <p>Now go build the life you were meant to live.</p>

        <blockquote>"The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb</blockquote>

        <div style="text-align: center; margin-top: 60px; padding-top: 40px; border-top: 2px solid #2c3e50;">
          <p style="font-size: 0.9em; color: #7f8c8d;">Your transformation begins with a single decision.</p>
          <p style="font-size: 0.9em; color: #7f8c8d; margin-top: 10px;">Make it now.</p>
        </div>
      `
    }
  };

  return (
    <div className="book-container">
      <aside className="sidebar">
        <div className="book-title">
          <h1>The Success Blueprint</h1>
          <p className="subtitle">Master Discipline, Focus & Achievement</p>
        </div>

        <nav className="chapter-nav">
          <button
            className={currentChapter === 'intro' ? 'active' : ''}
            onClick={() => setCurrentChapter('intro')}
          >
            Introduction
          </button>
          <button
            className={currentChapter === 'discipline' ? 'active' : ''}
            onClick={() => setCurrentChapter('discipline')}
          >
            Chapter 1: Discipline
          </button>
          <button
            className={currentChapter === 'focus' ? 'active' : ''}
            onClick={() => setCurrentChapter('focus')}
          >
            Chapter 2: Focus
          </button>
          <button
            className={currentChapter === 'rules' ? 'active' : ''}
            onClick={() => setCurrentChapter('rules')}
          >
            Chapter 3: Rules
          </button>
          <button
            className={currentChapter === 'pillars' ? 'active' : ''}
            onClick={() => setCurrentChapter('pillars')}
          >
            Chapter 4: Five Pillars
          </button>
          <button
            className={currentChapter === 'systems' ? 'active' : ''}
            onClick={() => setCurrentChapter('systems')}
          >
            Chapter 5: Systems
          </button>
          <button
            className={currentChapter === 'obstacles' ? 'active' : ''}
            onClick={() => setCurrentChapter('obstacles')}
          >
            Chapter 6: Obstacles
          </button>
          <button
            className={currentChapter === 'implementation' ? 'active' : ''}
            onClick={() => setCurrentChapter('implementation')}
          >
            Chapter 7: 90-Day Protocol
          </button>
          <button
            className={currentChapter === 'conclusion' ? 'active' : ''}
            onClick={() => setCurrentChapter('conclusion')}
          >
            Conclusion
          </button>
        </nav>
      </aside>

      <main className="content">
        <article className="chapter">
          <h2>{chapters[currentChapter].title}</h2>
          <div
            className="chapter-content"
            dangerouslySetInnerHTML={{ __html: chapters[currentChapter].content }}
          />
        </article>

        <div className="chapter-navigation">
          {currentChapter !== 'intro' && (
            <button
              className="nav-button prev"
              onClick={() => {
                const keys = Object.keys(chapters);
                const currentIndex = keys.indexOf(currentChapter);
                if (currentIndex > 0) {
                  setCurrentChapter(keys[currentIndex - 1]);
                  window.scrollTo(0, 0);
                }
              }}
            >
              ← Previous Chapter
            </button>
          )}
          {currentChapter !== 'conclusion' && (
            <button
              className="nav-button next"
              onClick={() => {
                const keys = Object.keys(chapters);
                const currentIndex = keys.indexOf(currentChapter);
                if (currentIndex < keys.length - 1) {
                  setCurrentChapter(keys[currentIndex + 1]);
                  window.scrollTo(0, 0);
                }
              }}
            >
              Next Chapter →
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
