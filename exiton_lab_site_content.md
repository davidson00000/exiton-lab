---
title: EXITON Lab
tagline: Architecture-Driven Intelligence
---

# 🧠 EXITON Lab

> **We design intelligence through architecture.**  
> 構造によって知能をつくる、インディペンデントAI研究所。

---

## 1. What is EXITON Lab?

EXITON Lab は、  
**「人間とAIが同じテーブルに座り、共同で知能アーキテクチャを設計する」**  
ことをミッションとした、小規模・実験志向のAI研究ユニットです。

- 大規模クラウドモデルではなく、**Small / Local Language Models (SLMs)** にフォーカス  
- 「たくさん学習する」のではなく、**どう構造化するか（Architecture）** を重視  
- 研究プロセスのあらゆる場面で **AI を共同研究者としてフル活用**  
- それでもなお、最終責任と判断は **人間研究者が負う**

EXITON Lab の合言葉は：

> **Structure > Scale**  
> スケールよりも構造を。

---

## 2. Research Focus

EXITON Lab が取り組む研究テーマは、次の4つの軸に整理できます。

### 2.1 Reliability & Validation of AI Systems

キーワード：**Logic Validator / Fault Injection / Self-Consistency / Guardrails**

- LLM/SLM の出力が「たまたま」正しいのではなく、  
  **構造的に壊れにくくするにはどうすればよいか？**
- どのような検証レイヤー（Validator / Critic / Judge / Rule Engine）があれば、  
  モデルの hallucination や論理破綻を検知し、抑え込めるのか？
- 「モデルを大きくする」のではなく、  
  **“検証まわりのアーキテクチャ” を強化することで信頼性を上げられるか？**

EXITON Lab は、こうした問いに対して  
**テストハーネス・ベンチマーク・検証アルゴリズム**を組み合わせた  
「AIシステムのためのロジック・バリデーション」を研究しています。

※ 個別の実装・実験結果は、査読プロセス完了後に公開予定です。

---

### 2.2 Cognitive Operating Systems

キーワード：**ContextOS / Semantic CPU / State Manager / Execution Orchestration**

LLM を「一発回答マシン」としてではなく、  
**OS の中に載せる CPU のようなコンポーネント**として扱うためのアーキテクチャを探究しています。

- タスク状態をどのように表現し、保存し、更新するか？  
- モデルをどこまで「stateless CPU」、どこから「意思決定器」と見なすのか？  
- Tool-Calling・メモリ・検証ロジックを OS 的に配置するとどう変わるか？

EXITON Lab は、  
**「知能にとっての OS とは何か？」**  
という長期的な問いに対して、小さな実験を積み重ねていきます。

※ 具体的なアーキテクチャ図・評価結果は、論文採択後に順次公開。

---

### 2.3 Architecture-Driven Intelligence

キーワード：**Structure > Scale / Modularity / Intrinsic Reliability**

EXITON Lab が一貫して信じているのは、次の仮説です。

> **“知能の安定性は、パラメータ数よりアーキテクチャで決まる。”**

- どのようなモジュール分解をすれば、  
  小さなモデルでも大きな問題を解けるのか？
- どこまでを学習に任せ、どこからを設計（エンジニアリング）で決めるべきか？
- 「OS 的な制御構造」と「統計的モデル」の境界はどこに引くべきか？

この問いに対する答えを、  
EXITON Lab は **ローカル環境で実行可能な小さな実験**から積み上げていきます。

---

### 2.4 Human–AI Co-Research

キーワード：**AI-Assisted Research / Co-Design / Tool-Augmented Scientist**

EXITON Lab の最大の特徴は、  
**研究プロセスそのものを「人間 × AI の協働」として再設計している**ことです。

- アイデア出し：AIとブレストし、問題設定を多角的に検討  
- 関連研究の整理：AIと一緒に論文をマップし、人間が最終整理  
- アーキテクチャ設計：人間が方向性を決め、AIが設計案を量産  
- コード実装：AI にドラフトを書かせ、人間が検証とリファクタリング  
- 実験計画：AI の提案を参考にしつつ、最終的な条件は人間が決定  
- 論文執筆：AI が草案を作り、人間が意味と責任を乗せる

ただし、どれだけ AI を活用しても、  
**研究の責任と最終判断は人間の研究者が負う**という原則を守ります。

---

## 3. Research Principles & AI Usage Policy

EXITON Lab は、ICLR/NeurIPS などの国際会議のポリシーに準拠しつつ、  
独自の研究ポリシーを以下のように定めます。

### 3.1 Transparency（透明性）

- どの研究プロジェクトで、どの AI モデルを、どの用途に使ったかを記録します。
- 論文や記事では、**“AI Usage Disclosure”** セクションを設け、  
  AI の利用範囲（文章生成、コード支援、実験補助など）を明示します。

### 3.2 Human Responsibility（最終責任は人間）

- AI が生成したアイデア・コード・文章であっても、  
  その真偽・妥当性・倫理性の最終責任は人間の研究者が負います。
- EXITON Lab は **「AI が言ったから採用した」** という形では主張を行いません。

### 3.3 Reproducibility（再現性）

- 実験にAIを用いた場合も、  
  モデル名・バージョン・推論設定・プロンプト等を記録し、  
  他者が追試可能な形で公開することを目指します。
- 「AIがそう評価したから正しい」とするのではなく、  
  **人間が検証可能な指標と手順**を用いて結果を報告します。

### 3.4 Privacy & Confidentiality（守秘義務）

- 査読中の論文や守秘義務のある資料を、  
  公開LLMや第三者のサーバに送信することは行いません。
- 機密性が必要な場合は、ローカル LLM または安全な専用環境を利用します。

### 3.5 Ethical Partnership（倫理的な人間–AI協働）

- AI を「魔法の箱」と見なさず、  
  **限界とバイアスを持つ統計的ツール**として扱います。
- AI は “共犯者” ではなく **“共同研究パートナー”** ですが、  
  法的・倫理的な責任主体はあくまで人間側にあります。

---

## 4. Current Projects

※ 詳細な実験設定・数値・図表は、査読プロセスが完了するまで公開しません。  
　ここでは「どのような方向性の研究か」のみを記載します。

### 4.1 Logic Validator（Under Preparation）

LLM/SLM の出力に対して「論理の検品ライン」を通すことで、  
**推論の一貫性と安全性を高める**ことを目指した研究プロジェクトです。

- 論理検証・ルールベース / LLM ベースの Validator の組み合わせ  
- AIシステムに対する Fault Injection（意地悪な入力）による評価  
- “LLM-as-a-judge” 以外の、安全で人間制御可能な検証方法の探究

このプロジェクトは、ICLR 2026 向けの論文として準備中です。

---

### 4.2 ContextOS（Under Preparation）

LLM/SLM を「アプリの中に埋め込む AI」ではなく、  
**「知能を支えるOS的レイヤ」**として再解釈する研究プロジェクトです。

- タスク状態の決定論的な管理（State Management）  
- Manager–Worker・Validator・Tool Executor などのモジュールによる制御構造  
- 小規模モデルでも安定して動作する Agent/Tool システムの設計

こちらも、国際会議向けの論文として準備中のため、  
詳細な構造や実験結果は、採択後に順次公開予定です。

---

## 5. People

### Founder / Lead Researcher

**Kousuke Nakamura**  
- Background: Electrical & Electronics Engineering  
- Interests: AI Architecture, SLM-based Agents, Reliability, Autonomous Research Systems  
- Mission: 「個人レベルの計算資源でも扱える “自己目的的な知性” をつくること」

（将来的に共同研究者やコラボレーターが増えた場合、ここに追加）

---

## 6. Technology Stack

EXITON Lab の研究は、主に次の技術スタックの上に構築されています。

- **Language Models**
  - Small / Local Language Models（例：Llama 3 系、Qwen 系など）
  - 一部の実験において OpenAI / Gemini 等のクラウドモデルを利用

- **Runtime / Infra**
  - ローカル GPU / CPU 環境
  - コンテナベースの実験環境
  - ログ収集・可視化ツール（例：Weights & Biases 相当の自前基盤 等）

- **Software**
  - Python（実験コード / ツール実装）
  - Jupyter Notebook（プロトタイピング）
  - Obsidian / Notion（知識管理）
  - GitHub（コード・論文管理）

---

## 7. Blog & Notes

EXITON Lab のブログでは、以下のような内容を公開予定です。

- 読書ノート（Bishop / Sutton / Goodfellow / AGI 論文 など）
- Architecture や Reliability に関する技術メモ
- Small Language Models の実験ログ（公開可能な範囲）
- 人間 × AI による共同研究のワークフロー紹介
- 研究者としての日々の進捗と反省

※ 論文投稿前の未公開アイデアや、査読中の詳細は掲載しません。

---

## 8. Contact

EXITON Lab へのコンタクト・コラボ・相談などは、  
以下のいずれかの方法でご連絡ください。

- Research Collaboration / Joint Experiments  
- Architecture / Reliability に関する技術相談  
- 「個人でもできるAI研究」に関するメンタリング など

（具体的なメールアドレスやフォームURLは、本番サイト側で追記）

---

## 9. Roadmap (High-Level)

- 2025–2026:  
  - Logic Validator / ContextOS 系の論文を国際会議へ投稿  
  - Small / Local モデル前提の評価基盤を整備  
- 2026–2027:  
  - 「自己目的的知性」に関する実験的フレームワーク構築  
  - EXITON Lab としての公開ベンチマーク・OSS のリリース

EXITON Lab は、  
**“人間とAIが対等なパートナーとして研究する時代”** の  
フロントラインを走り続けます。
