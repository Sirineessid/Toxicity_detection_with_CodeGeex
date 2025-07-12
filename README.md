# 🔊 Real‑Time Voice Toxic Language Detection

A demo pipeline using **CodeGeeX-inspired models** for live detection of toxic speech in audio streams.

---

## 🛠️ Tech Stack

- **Audio capture** – microphone input via Python (`sounddevice`)
- **ASR** – speech-to-text using `wav2vec2.0`
- **Toxicity model** – text classification with `unitary/toxic-bert`
- **Pipeline** – streaming capture → transcribe → detect toxic segments → alert

---

## 📚 Toxicity Categories (as per AWS Transcribe)

Following Amazon’s taxonomy of toxic speech, we flag audio under:
- Profanity
- Hate speech
- Sexual harassment
- Insults, threats
- Graphic violence
- Harassment/abuse :contentReference[oaicite:0]{index=0}


