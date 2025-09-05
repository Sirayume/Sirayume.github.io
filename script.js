document.addEventListener('DOMContentLoaded', () => {

    // --- データ定義 ---
    const guides = {
        attacker: {
            title: "アタッカー育成ロードマップ",
            keywords: "アタッカー 攻撃 ハバタクカミ パオジアン",
            steps: [
                { icon: "🧬", title: "個体値の確認", description: "ジャッジ機能でポケモンの素質をチェック！「さいこう」が多いポケモンを選ぼう。", details: "ボックスのジャッジ機能で見られます。もし理想の個体値でなくても「すごいとっくん」で後から最大にできます。" },
                { icon: "🏋️", title: "努力値振り (攻撃と素早さ)", description: "ドーピングアイテムとパワー系アイテムを使って「攻撃」と「素早さ」を最大まで上げよう。", details: "攻撃に252、素早さに252、余りをHPに4振るのが基本です。ラッキーズでアイテムを買って使うのが一番早いです。" },
                { icon: "📈", title: "レベル上げ", description: "けいけんアメを使ってレベルを50以上にしよう。対戦ルールは基本的にレベル50に統一されます。", details: "テラレイドバトルを周回すると、けいけんアメがたくさん手に入ります。" },
                { icon: "🍃", title: "性格の変更", description: "ミントを使って性格補正を「いじっぱり」や「ようき」などに変えよう。", details: "物理アタッカーならこの2つが主流。特殊アタッカーなら「ひかえめ」や「おくびょう」です。" },
                { icon: "💥", title: "技の習得・変更", description: "タイプ一致の強力な攻撃技や、範囲の広い技を覚えさせよう。", details: "わざマシンを使ったり、思い出させたりして技を整えます。何を覚えさせるか迷ったら、人気の育成論サイトを参考にしてみましょう。" },
                { icon: "🎒", title: "もちもの入手", description: "火力を上げる「いのちのたま」や「こだわりハチマキ」、行動保証の「きあいのタスキ」などを入手しよう。", details: "テーブルシティのデリバードポーチなどで購入できます。何を持たせるかで戦い方が大きく変わります。" },
                { icon: "👑", title: "すごいとっくん (必要なら)", description: "個体値が「さいこう」でなかった能力を、フリッジタウンで鍛えてもらおう。", details: "レベル50以上であることと、「ぎんのおうかん」や「きんのおうかん」が必要です。" }
            ]
        },
        durable: {
            title: "耐久型育成ロードマップ",
            keywords: "耐久型 防御 受け ヘイラッシャ ドヒドイデ",
            steps: [
                { icon: "🧬", title: "個体値の確認", description: "ジャッジ機能で「HP」「防御」「特防」が「さいこう」のポケモンを選ぼう。", details: "攻撃性能が不要なポケモンは、攻撃の個体値が低い（ダメかも）方が有利な場合もありますが、まずは気にしなくてOKです。" },
                { icon: "🏋️", title: "努力値振り (HPと防御/特防)", description: "ドーピングアイテムを使って「HP」と「防御」または「特防」を最大まで上げよう。", details: "物理攻撃に強くするならHPと防御、特殊攻撃に強くするならHPと特防に振るのが基本です。" },
                { icon: "📈", title: "レベル上げ", description: "けいけんアメを使ってレベルを50以上にしよう。", details: "レベルは高いほど耐久力も上がります。しっかり50以上にしましょう。" },
                { icon: "🍃", title: "性格の変更", description: "ミントを使って性格補正を「ずぶとい」や「おだやか」などに変えよう。", details: "物理受けなら「ずぶとい」「わんぱく」、特殊受けなら「おだやか」「しんちょう」が一般的です。" },
                { icon: "🛡️", title: "技の習得・変更", description: "「まもる」「ねむる」などの耐久技や、相手を妨害する補助技を覚えさせよう。", details: "耐久型は攻撃するだけでなく、回復したり、相手の状態異常を狙ったりする技が重要です。" },
                { icon: "🎒", title: "もちもの入手", description: "毎ターンHPが回復する「たべのこし」や、能力が下がらない「クリアチャーム」などを入手しよう。", details: "もちもので耐久性能をさらに高めることができます。" },
                { icon: "👑", title: "すごいとっくん (必要なら)", description: "個体値が「さいこう」でなかった能力を、フリッジタウンで鍛えてもらおう。", details: "特にHP、防御、特防は最大にしておきたい能力です。" }
            ]
        },
        support: {
            title: "サポート型育成ロードマップ",
            keywords: "サポート型 補助 妨害 オーロンゲ モロバレル",
            steps: [
                { icon: "🧬", title: "個体値の確認", description: "役割に応じて必要な能力の個体値を確認。素早さが重要になることも。", details: "例えば「トリックルーム」を使う型なら、素早さの個体値は低い（ダメかも）が理想になります。" },
                { icon: "🏋️", title: "努力値振り (耐久と素早さ調整)", description: "行動回数を確保するため、HPと防御/特防に厚く振るのが基本。", details: "特定の相手より先に動けるように「すばやさ調整」を行うことも多いですが、最初はHPと防御/特防に全振りでOKです。" },
                { icon: "📈", title: "レベル上げ", description: "レベル50以上にしよう。", details: "他の型と同様、レベルは50が基本です。" },
                { icon: "🍃", title: "性格の変更", description: "「ずぶとい」「おだやか」など、耐久力を上げる性格が基本。", details: "先手で補助技を使いたい場合は「おくびょう」などで素早さを上げることもあります。" },
                { icon: "🛠️", title: "技の習得・変更", description: "「リフレクター」「ひかりのかべ」「キノコのほうし」など、味方を助ける技や相手を妨害する技を覚えさせよう。", details: "ポケモンによって覚えられるサポート技は様々です。チームに合った技を選びましょう。" },
                { icon: "🎒", title: "もちもの入手", description: "補助技を出しやすくする「メンタルハーブ」や、場に長く居座るための「オボンのみ」などを入手しよう。", details: "「ひかりのねんど」を持たせると壁のターンを伸ばせます。" }
            ]
        },
        weather: {
            title: "天候パーティ用育成ロードマップ",
            keywords: "天候パーティ あめ すなあらし ペリッパー バンギラス",
            steps: [
                { icon: "🧬", title: "個体値の確認", description: "天候始動役とエースアタッカーで必要な個体値が異なります。まずはアタッカーの個体値を確認しよう。", details: "天候エースは攻撃と素早さが重要。天候始動役は耐久力が重要です。" },
                { icon: "🏋️", title: "努力値振り (役割に応じて)", description: "天候エースは攻撃と素早さに、天候始動役は耐久（HPと防御/特防）に振ろう。", details: "雨パのエースなら特攻と素早さ、砂パのエースなら攻撃と素早さ、といったように天候によって様々です。" },
                { icon: "📈", title: "レベル上げ", description: "レベル50以上にしよう。", details: "対戦の基本です。" },
                { icon: "🍃", title: "性格の変更", description: "エースアタッカーは「ひかえめ」「いじっぱり」など火力を上げる性格がおすすめ。", details: "天候の恩恵で素早さが上がる特性（すいすい、すなかき等）を持つポケモンは、火力を優先することが多いです。" },
                { icon: "☀️🌧️", title: "技の習得・変更", description: "天候始動役は天候を変える技（あまごい等）、エースは天候と相性の良い技を覚えさせよう。", details: "雨なら「ハイドロポンプ」、晴れなら「ソーラービーム」などが強力です。" },
                { icon: "🎒", title: "もちもの入手", description: "天候ターンを伸ばす「あついいわ」「しめったいわ」や、エースの火力を上げるもちものを入手しよう。", details: "天候始動役は耐久を上げるきのみなどを持つのも有効です。" }
            ]
        },
        trickroom: {
            title: "トリックルームパーティ用育成ロードマップ",
            keywords: "トリックルーム トリルパ 低速 鈍足 ミミッキュ ハリテヤマ",
            steps: [
                { icon: "🧬", title: "個体値の確認 (すばやさ最低！)", description: "ジャッジ機能で「すばやさ」が「ダメかも」の個体を探そう。他は「さいこう」が理想。", details: "トリックルーム下では素早さが低いほど先に行動できるため、すばやさの個体値は0が理想です。これを「S0（エスゼロ）」と呼びます。" },
                { icon: "🏋️", title: "努力値振り (すばやさ以外)", description: "「HP」と「攻撃」（または「特攻」）を最大まで上げよう。すばやさには振りません。", details: "火力を最大限に高めるため、HPと攻撃/特攻に252ずつ振るのが基本です。" },
                { icon: "📈", title: "レベル上げ", description: "けいけんアメを使ってレベルを50以上にしよう。", details: "対戦の基本です。" },
                { icon: "🍃", title: "性格の変更 (すばやさ↓)", description: "ミントを使い、性格補正が「ゆうかん」（攻撃↑すばやさ↓）や「れいせい」（特攻↑すばやさ↓）になるようにしよう。", details: "ミントを使っても、元の性格（すばやさが下がる性格）のままにしておくのが理想です。" },
                { icon: "🔄", title: "技の習得・変更", description: "パーティの始動役には「トリックルーム」を覚えさせよう。アタッカーには強力な攻撃技を。", details: "トリックルームを覚えられるポケモンは限られています。ミミッキュやクレセリアなどが有名です。" },
                { icon: "🎒", title: "もちもの入手", description: "アタッカーには「いのちのたま」、始動役には行動を保証する「きあいのタスキ」や「メンタルハーブ」を持たせよう。", details: "確実にトリックルームを成功させることが重要なので、始動役のもちものは慎重に選びましょう。" }
            ]
        }
    };

    // --- DOM要素の取得 ---
    const searchBar = document.getElementById('search-bar');
    const guideCards = document.querySelectorAll('.guide-card');
    const noResultsMsg = document.querySelector('.no-results');
    const roadmapSection = document.getElementById('roadmap');
    const roadmapTitle = document.getElementById('roadmap-title');
    const stepsList = document.getElementById('steps-list');
    const progressBarInner = document.getElementById('progress-bar-inner');
    const progressText = document.getElementById('progress-text');

    // --- イベントリスナー ---
    guideCards.forEach(card => {
        card.addEventListener('click', () => {
            const guideId = card.dataset.guideId;
            if (guideId) {
                loadGuide(guideId);
            }
        });
    });
    
    stepsList.addEventListener('change', (event) => {
        if (event.target.classList.contains('checklist-item')) {
            updateProgress();
            event.target.closest('li').classList.toggle('completed', event.target.checked);
        }
    });

    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        let resultsFound = false;

        guideCards.forEach(card => {
            const guideId = card.dataset.guideId;
            const guideData = guides[guideId];
            const cardText = (guideData.keywords + " " + card.textContent).toLowerCase();
            
            if (cardText.includes(searchTerm)) {
                card.classList.remove('hidden');
                resultsFound = true;
            } else {
                card.classList.add('hidden');
            }
        });

        noResultsMsg.classList.toggle('hidden', resultsFound);
    });

    // --- 関数 ---
    function loadGuide(guideType) {
        const guideData = guides[guideType];
        roadmapTitle.textContent = guideData.title;
        stepsList.innerHTML = ''; 

        guideData.steps.forEach((step, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="step-${index}" class="checklist-item">
                <div class="step-content">
                    <label for="step-${index}">${step.icon} ${step.title}</label>
                    <p>${step.description}</p>
                    ${step.details ? `<details><summary>もっと詳しく</summary><p>${step.details}</p></details>` : ''}
                </div>
            `;
            stepsList.appendChild(li);
        });

        roadmapSection.classList.remove('hidden');
        updateProgress();
        roadmapSection.scrollIntoView({ behavior: 'smooth' });
    }

    function updateProgress() {
        const checkboxes = stepsList.querySelectorAll('.checklist-item');
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        const totalCount = checkboxes.length;

        if (totalCount === 0) return;

        const percentage = (checkedCount / totalCount) * 100;
        
        progressBarInner.style.width = `${percentage}%`;
        progressText.textContent = `${checkedCount} / ${totalCount}`;
    }
});