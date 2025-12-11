export const researchContent = {
    en: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Reliability & Validation of AI Systems",
                body: "Instead of hoping LLMs are 'accidentally' correct, how can we make them structurally unbreakable? We research logic validation layers (Validator / Critic / Rule Engine) to detect and suppress hallucination. We aim to enhance reliability by strengthening the 'verification architecture' rather than just making models larger."
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                body: "Exploring architectures that treat LLMs not as a 'one-shot answer machine' but as a component like a CPU within an OS. We investigate how to manage task state, where to draw the line between stateless CPU and decision maker, and how to orchestrate Tool-Calling and memory."
            },
            {
                id: "architecture-driven",
                heading: "Architecture-Driven Intelligence",
                body: "We believe 'Intelligence stability is determined by architecture, not parameter count.' We explore module decomposition to solve large problems with small models, defining where engineering should take over from learning."
            },
            {
                id: "human-ai-coresearch",
                heading: "Human–AI Co-Research",
                body: "Redesigning the research process itself as 'Human × AI Collaboration'. From brainstorming to coding and paper writing, we work with AI as a partner, while retaining human responsibility for final judgment."
            }
        ]
    },
    jp: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Reliability & Validation of AI Systems",
                body: "LLM/SLM の出力が「たまたま」正しいのではなく、構造的に壊れにくくするにはどうすればよいか？検証レイヤー（Validator / Critic / Rule Engine）を用いて hallucination を検知・抑制し、モデルサイズではなく“検証アーキテクチャ”の強化によって信頼性を向上させる研究を行っています。"
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                body: "LLM を「一発回答マシン」としてではなく、OS の中に載せる CPU のようなコンポーネントとして扱うためのアーキテクチャを探究しています。タスク状態の管理、stateless CPU と意思決定器の境界、Tool-Calling やメモリの OS 的配置を実験しています。"
            },
            {
                id: "architecture-driven",
                heading: "Architecture-Driven Intelligence",
                body: "「知能の安定性は、パラメータ数よりアーキテクチャで決まる」という仮説のもと、小さなモデルでも大きな問題を解くためのモジュール分解や、学習と設計（エンジニアリング）の適切な境界線を探究しています。"
            },
            {
                id: "human-ai-coresearch",
                heading: "Human–AI Co-Research",
                body: "研究プロセスそのものを「人間 × AI の協働」として再設計しています。アイデア出しから実装、執筆に至るまで AI をパートナーとして活用しつつ、最終的な責任と判断は人間が負うという原則を実践しています。"
            }
        ]
    }
};

export const projectsContent = {
    en: {
        title: "Current Projects",
        sections: [
            {
                id: "logic-validator",
                heading: "Logic Validator (Under Preparation)",
                body: "A research project aimed at increasing inference consistency and safety by passing LLM/SLM outputs through a 'logic inspection line'. We are combining rule-based/LLM-based validators and using Fault Injection to evaluate robustness. Targeting ICLR 2026."
            },
            {
                id: "context-os",
                heading: "ContextOS (Under Preparation)",
                body: "A project reinterpreting LLMs/SLMs not as embedded AI but as an 'OS-like layer handling intelligence'. We focus on deterministic state management, module control structures (Manager-Worker), and stable Agent/Tool system design."
            }
        ]
    },
    jp: {
        title: "Current Projects",
        sections: [
            {
                id: "logic-validator",
                heading: "Logic Validator (Under Preparation)",
                body: "LLM/SLM の出力に対して「論理の検品ライン」を通すことで、推論の一貫性と安全性を高めることを目指した研究プロジェクトです。論理検証・Validator の組み合わせや Fault Injection による評価を行い、ICLR 2026 への投稿を目指しています。"
            },
            {
                id: "context-os",
                heading: "ContextOS (Under Preparation)",
                body: "LLM/SLM を「アプリの中に埋め込む AI」ではなく、「知能を支えるOS的レイヤ」として再解釈するプロジェクトです。タスク状態の決定論的な管理や、Manager-Worker による制御構造、小規模モデルでも安定するシステム設計を研究しています。"
            }
        ]
    }
};

export const principlesContent = {
    en: {
        title: "Research Principles & AI Usage Policy",
        sections: [
            {
                id: "transparency",
                heading: "Transparency",
                body: "We record which AI models and uses are involved in every project. We openly disclose AI usage in papers (generating text, code, etc.)."
            },
            {
                id: "human-responsibility",
                heading: "Human Responsibility",
                body: "Even if AI generates ideas or code, the final responsibility for truth, validity, and ethics lies with human researchers. We do not claim 'AI said so' as justification."
            },
            {
                id: "reproducibility",
                heading: "Reproducibility",
                body: "We record model versions and prompts to ensure reproducibility. We report results based on human-verifiable metrics, not just AI evaluation."
            },
            {
                id: "privacy",
                heading: "Privacy & Confidentiality",
                body: "We do not send unpublished papers or confidential data to public LLMs. We use local LLMs or secure environments for sensitive data."
            },
            {
                id: "ethical-partnership",
                heading: "Ethical Partnership",
                body: "We treat AI not as a magic box, but as a statistical tool with limits and biases. AI is a co-research partner, but legal and ethical agency remains with humans."
            }
        ]
    },
    jp: {
        title: "Research Principles & AI Usage Policy",
        sections: [
            {
                id: "transparency",
                heading: "Transparency（透明性）",
                body: "どのプロジェクトでどの AI をどう使ったかを記録します。論文等では AI Usage Disclosure を設け、利用範囲を明示します。"
            },
            {
                id: "human-responsibility",
                heading: "Human Responsibility（最終責任は人間）",
                body: "AI が生成したものであっても、真偽・妥当性・倫理性の最終責任は人間が負います。「AI が言ったから」という主張は行いません。"
            },
            {
                id: "reproducibility",
                heading: "Reproducibility（再現性）",
                body: "実験に AI を用いた場合も、モデル名や設定を記録し、追試可能な公開を目指します。人間が検証可能な指標を用いて報告します。"
            },
            {
                id: "privacy",
                heading: "Privacy & Confidentiality（守秘義務）",
                body: "査読中の論文や機密資料を公開 LLM に送信しません。必要に応じてローカル LLM や安全な環境を利用します。"
            },
            {
                id: "ethical-partnership",
                heading: "Ethical Partnership（倫理的な人間–AI協働）",
                body: "AI を魔法の箱ではなく、限界とバイアスを持つ統計的ツールとして扱います。共犯者ではなく共同研究パートナーですが、責任主体は人間です。"
            }
        ]
    }
};
