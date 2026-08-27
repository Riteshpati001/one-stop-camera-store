/**
 * Aperture Noir design note: this flow moves one measured choice at a time like a
 * film strip; selections are a conversation starter, not an unverified AI recommendation.
 */
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { budgetOptions, experienceOptions, purposeOptions } from "@/data/store";

const steps = [
  { title: "What are you creating?", copy: "Start with the work, not the specification.", options: purposeOptions },
  { title: "Where are you in the craft?", copy: "The right amount of control matters.", options: experienceOptions },
  { title: "What kind of setup feels right?", copy: "A range helps shape the conversation, never limits it.", options: budgetOptions },
];

export default function GearFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const current = steps[step];
  const select = (value: string) => setAnswers((previous) => previous.map((answer, index) => index === step ? value : answer));
  const complete = step === steps.length;
  const reset = () => { setStep(0); setAnswers(["", "", ""]); };
  return (
    <div className="page gear-page">
      <section className="gear-stage shell">
        <div className="gear-rail" aria-hidden="true"><span style={{ width: `${complete ? 100 : ((step + 1) / steps.length) * 100}%` }} /></div>
        {!complete ? <>
          <div className="gear-status"><span>0{step + 1} / 0{steps.length}</span><span>Find your gear</span></div>
          <div className="gear-question">
            <p className="eyebrow side-enter side-enter-left"><Sparkles /> A simpler starting point</p>
            <h1 className="side-enter side-enter-left side-enter-delay-1">{current.title}</h1>
            <p className="side-enter side-enter-right side-enter-delay-2">{current.copy}</p>
          </div>
          <div className={`gear-options option-count-${current.options.length}`}>
            {current.options.map((option, index) => <button onClick={() => select(option)} key={option} className={answers[step] === option ? "selected" : ""}><span>0{index + 1}</span><strong>{option}</strong><i /></button>)}
          </div>
          <div className="gear-controls">
            <button className="text-button" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft /> Back</button>
            <button className="button button-amber" disabled={!answers[step]} onClick={() => setStep(step + 1)}>{step === steps.length - 1 ? "See your brief" : "Continue"}<ArrowRight /></button>
          </div>
        </> : <div className="gear-complete">
          <div className="complete-mark"><Check /></div>
          <p className="eyebrow">Your gear brief</p>
          <h1>Now you have a clear place to begin.</h1>
          <p>This prototype does not generate product recommendations until One Stop approves its actual catalogue. Your choices are ready to share with the team.</p>
          <div className="answer-chips"><span>{answers[0]}</span><span>{answers[1]}</span><span>{answers[2]}</span></div>
          <div className="gear-controls"><button className="text-button" onClick={reset}><ArrowLeft /> Start over</button><a className="button button-amber" href={`/quote?brief=${encodeURIComponent(answers.join(" | "))}`}>Share this brief <ArrowRight /></a></div>
        </div>}
      </section>
    </div>
  );
}
