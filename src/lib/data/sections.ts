export const researchContent = {
    en: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Logic Validation & Reliability",
                subtitle: "Strengthening AI reasoning through validation layers (LogicShield Theory)",
                body: "Instead of relying on 'accidental correctness' of LLMs, we build structural reliability. We use Validator, Critic, and Rule Engine layers to detect hallucinations and enforce logic. We aim to enhance reliability by strengthening the 'Verification Architecture' rather than just making models larger."
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                subtitle: "Treating LLMs as CPUs inside an OS (ContextOS Theory)",
                body: "We reinterpret LLMs not as the whole system, but as a CPU component within a larger 'Cognitive OS'. This research focuses on deterministic task management, memory hierarchy (SynapseVault), and robust Agent/Tool orchestration."
            },
            {
                id: "cooperative-intelligence",
                heading: "Cooperative Intelligence Architecture",
                subtitle: "Multi-SLM reasoning structure (SynapseMesh Theory)",
                body: "A specialized architecture where Planner, Worker, Reviewer, and other SLMs collaborate. We prove that a stable multi-stage reasoning structure ('Structure beats Parameter') can outperform single giant models."
            }
        ]
    },
    jp: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Logic Validation & Reliability",
                subtitle: "Strengthening AI reasoning through validation layers (LogicShield Theory)",
                body: "LLMの出力が「たまたま」正しい状態に頼るのではなく、構造的な信頼性を構築します。Validator、Critic、Rule Engine層を用いてハルシネーションを検知し、論理を強制します。モデル規模よりも「検証アーキテクチャ」を重視します。"
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                subtitle: "Treating LLMs as CPUs inside an OS (ContextOS Theory)",
                body: "LLMをシステム全体と捉えるのではなく、より大きな「Cognitive OS」内のCPUコンポーネントとして再解釈します。決定論的なタスク管理、メモリ階層（SynapseVault）、そして堅牢なAgent/Toolオーケストレーションに焦点を当てています。"
            },
            {
                id: "cooperative-intelligence",
                heading: "Cooperative Intelligence Architecture",
                subtitle: "Multi-SLM reasoning structure (SynapseMesh Theory)",
                body: "Planner、Worker、ReviewerなどのSLMが協調する特化型アーキテクチャです。安定した多段推論構造（Structure beats Parameter）が、単一の巨大モデルを凌駕することを実証します。"
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
                id: "human-ai-coresearch",
                heading: "Human–AI Co-Research",
                body: "Redesigning the research process itself as 'Human × AI Collaboration'. From brainstorming to coding and paper writing, we work with AI as a partner, while retaining human responsibility for final judgment."
            },
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
                id: "human-ai-coresearch",
                heading: "Human–AI Co-Research",
                body: "研究プロセスそのものを「人間 × AI の協働」として再設計しています。アイデア出しから実装、執筆に至るまで AI をパートナーとして活用しつつ、最終的な責任と判断は人間が負うという原則を実践しています。"
            },
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
