const commonProbabilityValues = {
    prefix: [
        { level: 'S', chance: '0.2%' },
        { level: 'A', chance: '0.8%' },
        { level: 'B', chance: '4%' },
        { level: 'C', chance: '22%' },
        { level: 'D', chance: '31%' },
        { level: 'E', chance: '42%' }
    ],
    suffix: [
        { level: 'S', chance: '3%' },
        { level: 'A', chance: '7%' },
        { level: 'B', chance: '10%' },
        { level: 'C', chance: '15%' },
        { level: 'D', chance: '30%' },
        { level: 'E', chance: '35%' }
    ]
};

const languagePack = {
    tw: {
        probability: "機率",
        weapons: "武器",
        armor: "防具",
        accessories: "飾品",
        prefixProbability: "前綴機率",
        suffixProbability: "後綴機率",
        level: "等級",
        ability: "能力",
        chance: "機率",
        weaponEnchantment5: "武器附魔位置(+5)",
        weaponEnchantment10: "武器附魔位置(+10)",
        weaponEnchantment15: "武器附魔位置(+15)",
        armorEnchantment5: "防具附魔位置(+5)",
        armorEnchantment10: "防具附魔位置(+10)",
        armorEnchantment15: "防具附魔位置(+15)",
        annexEnchantment5: "飾品附魔位置(+5)",
        annexEnchantment10: "飾品附魔位置(+10)",
        annexEnchantment15: "飾品附魔位置(+15)",
        prefixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        suffixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        weaponEnchantment5Values: [
            "攻擊+ N %", "暴擊率+ N %", "暴擊傷害+ N %", "攻擊、防禦、生命+ N %",
            "暴擊率+ N %", "暴擊傷害+ N %", "暴擊率+ N %", "暴擊傷害+ N %",
            "攻擊+ N %", "暴擊率+ N %", "暴擊傷害+ N %", "攻擊+ N %",
            "暴擊率+ N %", "暴擊傷害+ N %", "暴擊率+ N %", "暴擊傷害+ N %"
        ],
        weaponEnchantment10Values: [
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害",
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害",
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害",
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害",
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害",
            "攻擊時有15%機率提高 N %總傷害", "暴擊時有60%機率提高 N %總傷害"
        ],
        weaponEnchantment15Values: [
            "攻擊時無視敵人 N %防禦",
            "暴擊時無視敵人 N %防禦",
            "對Boss造成的傷害增加 N %",
            "攻擊時無視敵人 N %防禦",
            "暴擊時無視敵人 N %防禦",
            "攻擊時無視敵人 N %防禦",
            "暴擊時無視敵人 N %防禦",
            "攻擊時無視敵人 N %防禦",
            "暴擊時無視敵人 N %防禦",
            "攻擊時無視敵人 N %防禦",
            "暴擊時無視敵人 N %防禦"
        ],
        armorEnchantment5Values: [
            "生命+ N %",
            "防禦+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "寵物減傷+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "普攻減傷+ N %",
            "技能減傷+ N %",
            "寵物減傷+ N %",
        ],
        armorEnchantment10Values: [
            "受到傷害時有10%機率吸收 N %傷害",
            "受到傷害時有9%機率吸收 N %傷害",
            "受到傷害時有8%機率吸收 N %傷害",
            "受到攻擊時有10%機率吸收 N %傷害",
            "受到攻擊時有9%機率吸收 N %傷害",
            "受到暴擊時有20%機率吸收 N %傷害",
            "受到攻擊時有10%機率吸收 N %傷害",
            "受到攻擊時有9%機率吸收 N %傷害",
            "受到暴擊時有20%機率吸收 N %傷害",
            "受到攻擊時有10%機率吸收 N %傷害",
            "受到攻擊時有9%機率吸收 N %傷害",
            "受到暴擊時有20%機率吸收 N %傷害",
            "受到攻擊時有10%機率吸收 N %傷害",
            "受到攻擊時有9%機率吸收 N %傷害",
            "受到暴擊時有20%機率吸收 N %傷害",
            "受到攻擊時有10%機率吸收 N %傷害",
            "受到攻擊時有9%機率吸收 N %傷害",
            "受到暴擊時有20%機率吸收 N %傷害",
        ],
        armorEnchantment15Values: [
            "受到傷害時有20%機率吸收 N %傷害",
            "受到傷害時有18%機率吸收 N %傷害",
            "受到傷害時有16%機率吸收 N %傷害",
            "受到攻擊時有20%機率吸收 N %傷害",
            "受到攻擊時有18%機率吸收 N %傷害",
            "受到暴擊時有40%機率吸收 N %傷害",
            "受到攻擊時有20%機率吸收 N %傷害",
            "受到攻擊時有18%機率吸收 N %傷害",
            "受到暴擊時有40%機率吸收 N %傷害",
            "受到攻擊時有20%機率吸收 N %傷害",
            "受到攻擊時有18%機率吸收 N %傷害",
            "受到暴擊時有40%機率吸收 N %傷害",
            "受到攻擊時有20%機率吸收 N %傷害",
            "受到攻擊時有18%機率吸收 N %傷害",
            "受到暴擊時有40%機率吸收 N %傷害",
            "受到攻擊時有20%機率吸收 N %傷害",
            "受到攻擊時有18%機率吸收 N %傷害",
            "受到暴擊時有40%機率吸收 N %傷害",
        ],
        annexEnchantment5Values: [
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "攻速+ N %",
            "閃避+ N %",
            "暴擊率+ N %",
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "暴擊率+ N %",
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "暴擊率+ N %",
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "暴擊率+ N %",
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "暴擊率+ N %",
            "攻擊+ N %",
            "防禦+ N %",
            "生命+ N %",
            "暴擊率+ N %",
        ],
        annexEnchantment10Values: [
            "閃避+ N %",
            "無視閃避+ N %",
            "普攻傷害+ N %",
            "普攻減傷+ N %",
            "技能傷害+ N %",
            "技能減傷+ N %",
            "寵物傷害+ N %",
            "寵物減傷+ N %",
            "BOSS增傷+ N %",
            "BOSS減傷+ N %",
            "暴擊傷害+ N %",
            "抗暴傷害+ N %",
            "治療率+ N %",
            "治療量+ N %",
        ],
        annexEnchantment15Values: [
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
            "提高 N %攻擊",
            "提高 N %防禦",
            "提高 N %生命",
            "提高 N %BOSS傷害",
            "提高 N %暴擊傷害",
        ]
    },
    "en": {
        probability: "Probability",
        weapons: "Weapons",
        armor: "Armor",
        accessories: "Accessories",
        prefixProbability: "Prefix Probability",
        suffixProbability: "Suffix Probability",
        level: "Level",
        ability: "Ability",
        chance: "Chance",
        weaponEnchantment5: "Weapon Enchantment Slot (+5)",
        weaponEnchantment10: "Weapon Enchantment Slot (+10)",
        weaponEnchantment15: "Weapon Enchantment Slot (+15)",
        armorEnchantment5: "Armor Enchantment Slot (+5)",
        armorEnchantment10: "Armor Enchantment Slot (+10)",
        armorEnchantment15: "Armor Enchantment Slot (+15)",
        annexEnchantment5: "Accessory Enchantment Slot (+5)",
        annexEnchantment10: "Accessory Enchantment Slot (+10)",
        annexEnchantment15: "Accessory Enchantment Slot (+15)",
        prefixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        suffixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        weaponEnchantment5Values: [
            "Attack + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
            "Attack, Defense, Health + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
            "Attack + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
            "Attack + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
            "CriticalRate + N %",
            "CriticalDamage + N %",
        ],
        weaponEnchantment10Values: [
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
            "Damage dealt is increased by  N % with a 15% chance when attacking",
            "Damage dealt is increased by  N % with a 60% chance when landing a critical hit",
        ],
        weaponEnchantment15Values: [
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",
            "Increase damage dealt to Boss by N%",
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",
            "Ignore N% of enemy defense when attacking",
            "Ignore N% of enemy defense when landing a critical hit",

        ],
        armorEnchantment5Values: [
            "Health + N%",
            "Defense + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Pet Damage Reduction + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Basic Attack Damage Reduction + N%",
            "Skill Damage Reduction + N%",
            "Pet Damage Reduction + N%"
        ],
        armorEnchantment10Values: [
            "10% chance to absorb N% damage when hit",
            "9% chance to absorb N% damage when hit",
            "8% chance to absorb N% damage when hit",
            "10% chance to absorb N% damage when attacked",
            "9% chance to absorb N% damage when attacked",
            "20% chance to absorb N% damage on critical hit",
            "10% chance to absorb N% damage when attacked",
            "9% chance to absorb N% damage when attacked",
            "20% chance to absorb N% damage on critical hit",
            "10% chance to absorb N% damage when attacked",
            "9% chance to absorb N% damage when attacked",
            "20% chance to absorb N% damage on critical hit",
            "10% chance to absorb N% damage when attacked",
            "9% chance to absorb N% damage when attacked",
            "20% chance to absorb N% damage on critical hit",
            "10% chance to absorb N% damage when attacked",
            "9% chance to absorb N% damage when attacked",
            "20% chance to absorb N% damage on critical hit"
        ],
        armorEnchantment15Values: [
            "20% chance to absorb N% damage when hit",
            "18% chance to absorb N% damage when hit",
            "16% chance to absorb N% damage when hit",
            "20% chance to absorb N% damage when attacked",
            "18% chance to absorb N% damage when attacked",
            "40% chance to absorb N% damage on critical hit",
            "20% chance to absorb N% damage when attacked",
            "18% chance to absorb N% damage when attacked",
            "40% chance to absorb N% damage on critical hit",
            "20% chance to absorb N% damage when attacked",
            "18% chance to absorb N% damage when attacked",
            "40% chance to absorb N% damage on critical hit",
            "20% chance to absorb N% damage when attacked",
            "18% chance to absorb N% damage when attacked",
            "40% chance to absorb N% damage on critical hit",
            "20% chance to absorb N% damage when attacked",
            "18% chance to absorb N% damage when attacked",
            "40% chance to absorb N% damage on critical hit"
        ],
        annexEnchantment5Values: [
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Attack Speed + N%",
            "Evasion + N%",
            "Critical Rate + N%",
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Critical Rate + N%",
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Critical Rate + N%",
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Critical Rate + N%",
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Critical Rate + N%",
            "Attack + N%",
            "Defense + N%",
            "Health + N%",
            "Critical Rate + N%"
        ],
        annexEnchantment10Values: [
            "Evasion +N%",
            "Ignore Evasion +N%",
            "Basic Attack Damage +N%",
            "Basic Attack Damage Reduction +N%",
            "Skill Damage +N%",
            "Skill Damage Reduction +N%",
            "Pet Damage +N%",
            "Pet Damage Reduction +N%",
            "Boss Damage Increase +N%",
            "Boss Damage Reduction +N%",
            "Critical Damage +N%",
            "Anti-Critical Damage +N%",
            "Heal Rate +N%",
            "Heal Amount +N%",
        ],
        annexEnchantment15Values: [
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
            "Increase Attack by N%",
            "Increase Defense by N%",
            "Increase Health by N%",
            "Increase Boss Damage by N%",
            "Increase Critical Damage by N%",
        ]
    },
    jp: {
        probability: "確率",
        weapons: "武器",
        armor: "防具",
        accessories: "アクセサリー",
        prefixProbability: "プレフィックス確率",
        suffixProbability: "サフィックス確率",
        level: "レベル",
        ability: "能力",
        chance: "確率",
        weaponEnchantment5: "武器エンチャントスロット(+5)",
        weaponEnchantment10: "武器エンチャントスロット(+10)",
        weaponEnchantment15: "武器エンチャントスロット(+15)",
        armorEnchantment5: "防具エンチャントスロット(+5)",
        armorEnchantment10: "防具エンチャントスロット(+10)",
        armorEnchantment15: "防具エンチャントスロット(+15)",
        annexEnchantment5: "アクセサリーエンチャントスロット(+5)",
        annexEnchantment10: "アクセサリーエンチャントスロット(+10)",
        annexEnchantment15: "アクセサリーエンチャントスロット(+15)",
        prefixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        suffixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        weaponEnchantment5Values: [
            "攻撃 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
            "攻撃、防御、人生 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
            "攻撃 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
            "攻撃 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
            "クリティカルヒット率 + N %",
            "致命傷 + N %",
        ],
        weaponEnchantment10Values: [
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
            "攻撃時に15%の確率で N %の総ダメージが増加",
            "クリティカル時に60%の確率で N %の総ダメージが増加",
        ],
        weaponEnchantment15Values: [
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
            "BOSSへのダメージが N %増加",
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
            "攻撃時に敵の防御 N %を無視",
            "クリティカル時に敵の防御 N %を無視",
        ],
        armorEnchantment5Values: [
            "生命+ N %",
            "防御+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "ペットのダメージ軽減+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "通常攻撃ダメージ軽減+ N %",
            "スキルダメージ軽減+ N %",
            "ペットのダメージ軽減+ N %"
        ],
        armorEnchantment10Values: [
            "ダメージを受けた時、10%の確率で N %のダメージを吸収",
            "ダメージを受けた時、9%の確率で N %のダメージを吸収",
            "ダメージを受けた時、8%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
        ],
        armorEnchantment15Values: [
            "ダメージを受けた時、20%の確率で N %のダメージを吸収",
            "ダメージを受けた時、18%の確率で N %のダメージを吸収",
            "ダメージを受けた時、16%の確率で N %のダメージを吸収",
            "攻撃を受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、18%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、40%の確率で N %のダメージを吸収",
            "攻撃を受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、18%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、40%の確率で N %のダメージを吸収",
            "攻撃を受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、18%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、40%の確率で N %のダメージを吸収",
            "攻撃を受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、18%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、40%の確率で N %のダメージを吸収",
            "攻撃を受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、18%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、40%の確率で N %のダメージを吸収",
        ],
        annexEnchantment5Values: [
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "攻撃速度 + N %",
            "回避率 + N %",
            "クリティカルヒット率 + N %",
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "クリティカルヒット率 + N %",
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "クリティカルヒット率 + N %",
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "クリティカルヒット率 + N %",
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "クリティカルヒット率 + N %",
            "攻撃 + N %",
            "防御 + N %",
            "人生 + N %",
            "クリティカルヒット率 + N %",
        ],
        annexEnchantment10Values: [
            "ダメージを受けた時、10%の確率で N %のダメージを吸収",
            "ダメージを受けた時、9%の確率で N %のダメージを吸収",
            "ダメージを受けた時、8%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
            "攻撃を受けた時、10%の確率で N %のダメージを吸収",
            "攻撃を受けた時、9%の確率で N %のダメージを吸収",
            "クリティカルを受けた時、20%の確率で N %のダメージを吸収",
        ],
        annexEnchantment15Values: [
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加",
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加",
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加",
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加",
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加",
            "攻撃力 N% 増加",
            "防御力 N% 増加",
            "生命 N% 増加",
            "BOSSダメージ N% 増加",
            "クリティカルダメージ N% 増加"
        ]
    }
    ,
    kr: {
        "probability": "확률",
        "weapons": "무기",
        "armor": "방어구",
        "accessories": "장신구",
        "prefixProbability": "접두 확률",
        "suffixProbability": "접미 확률",
        "level": "레벨",
        "ability": "능력",
        "chance": "확률",
        "weaponEnchantment5": "무기 마법 부여 위치(+5)",
        "weaponEnchantment10": "무기 마법 부여 위치(+10)",
        "weaponEnchantment15": "무기 마법 부여 위치(+15)",
        "armorEnchantment5": "방어구 마법 부여 위치(+5)",
        "armorEnchantment10": "방어구 마법 부여 위치(+10)",
        "armorEnchantment15": "방어구 마법 부여 위치(+15)",
        "annexEnchantment5": "장신구 마법 부여 위치(+5)",
        "annexEnchantment10": "장신구 마법 부여 위치(+10)",
        "annexEnchantment15": "장신구 마법 부여 위치(+15)",
        prefixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        suffixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        weaponEnchantment5Values: [
            "공격력+ N %", "치명타 확률+ N %", "치명타 피해+ N %", "공격력, 방어력, 체력+ N %",
            "치명타 확률+ N %", "치명타 피해+ N %", "치명타 확률+ N %", "치명타 피해+ N %",
            "공격력+ N %", "치명타 확률+ N %", "치명타 피해+ N %", "공격력+ N %",
            "치명타 확률+ N %", "치명타 피해+ N %", "치명타 확률+ N %", "치명타 피해+ N %"
        ],
        weaponEnchantment10Values: [
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가",
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가",
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가",
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가",
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가",
            "공격 시 15% 확률로 총 피해량 N % 증가", "치명타 시 60% 확률로 총 피해량 N % 증가"
        ],
        weaponEnchantment15Values: [
            "공격 시 적의 방어력 N % 무시",
            "치명타 시 적의 방어력 N % 무시",
            "보스에게 주는 피해량 N % 증가",
            "공격 시 적의 방어력 N % 무시",
            "치명타 시 적의 방어력 N % 무시",
            "공격 시 적의 방어력 N % 무시",
            "치명타 시 적의 방어력 N % 무시",
            "공격 시 적의 방어력 N % 무시",
            "치명타 시 적의 방어력 N % 무시",
            "공격 시 적의 방어력 N % 무시",
            "치명타 시 적의 방어력 N % 무시"
        ],
        armorEnchantment5Values: [
            "체력+ N %", "방어력+ N %", "기본 공격 피해 감소+ N %", "스킬 피해 감소+ N %",
            "기본 공격 피해 감소+ N %", "스킬 피해 감소+ N %", "기본 공격 피해 감소+ N %", "스킬 피해 감소+ N %",
            "펫 피해 감소+ N %", "기본 공격 피해 감소+ N %", "스킬 피해 감소+ N %", "기본 공격 피해 감소+ N %",
            "스킬 피해 감소+ N %", "기본 공격 피해 감소+ N %", "스킬 피해 감소+ N %", "펫 피해 감소+ N %"
        ],
        armorEnchantment10Values: [
            "피격 시 10% 확률로 N % 피해 흡수", "피격 시 9% 확률로 N % 피해 흡수",
            "피격 시 8% 확률로 N % 피해 흡수", "공격받을 시 10% 확률로 N % 피해 흡수",
            "공격받을 시 9% 확률로 N % 피해 흡수", "치명타 피격 시 20% 확률로 N % 피해 흡수",
            "공격받을 시 10% 확률로 N % 피해 흡수", "공격받을 시 9% 확률로 N % 피해 흡수",
            "치명타 피격 시 20% 확률로 N % 피해 흡수", "공격받을 시 10% 확률로 N % 피해 흡수",
            "공격받을 시 9% 확률로 N % 피해 흡수", "치명타 피격 시 20% 확률로 N % 피해 흡수"
        ],
        armorEnchantment15Values: [
            "피격 시 20% 확률로 N % 피해 흡수", "피격 시 18% 확률로 N % 피해 흡수",
            "피격 시 16% 확률로 N % 피해 흡수", "공격받을 시 20% 확률로 N % 피해 흡수",
            "공격받을 시 18% 확률로 N % 피해 흡수", "치명타 피격 시 40% 확률로 N % 피해 흡수"
        ],
        annexEnchantment5Values: [
            "공격력+ N %", "방어력+ N %", "체력+ N %", "공격 속도+ N %",
            "회피율+ N %", "치명타 확률+ N %"
        ],
        annexEnchantment10Values: [
            "회피율+ N %", "회피 무시+ N %", "기본 공격 피해+ N %", "기본 공격 피해 감소+ N %",
            "스킬 피해+ N %", "스킬 피해 감소+ N %", "펫 피해+ N %", "펫 피해 감소+ N %"
        ],
        annexEnchantment15Values: [
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가",
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가",
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가",
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가",
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가",
            "공격력 N% 증가",
            "방어력 N% 증가",
            "생명 N% 증가",
            "BOSS 데미지 N% 증가",
            "크리티컬 데미지 N% 증가"
        ]
    }
    ,
    cn: {
        probability: "机率",
        weapons: "武器",
        armor: "防具",
        accessories: "饰品",
        prefixProbability: "前缀机率",
        suffixProbability: "后缀机率",
        level: "等级",
        ability: "能力",
        chance: "机率",
        weaponEnchantment5: "武器附魔位置(+5)",
        weaponEnchantment10: "武器附魔位置(+10)",
        weaponEnchantment15: "武器附魔位置(+15)",
        armorEnchantment5: "防具附魔位置(+5)",
        armorEnchantment10: "防具附魔位置(+10)",
        armorEnchantment15: "防具附魔位置(+15)",
        annexEnchantment5: "饰品附魔位置(+5)",
        annexEnchantment10: "饰品附魔位置(+10)",
        annexEnchantment15: "饰品附魔位置(+15)",
        prefixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        suffixProbabilityValues: [
            { level: 'S', chance: '1%' },
            { level: 'A', chance: '2%' },
            { level: 'B', chance: '3%' },
            { level: 'C', chance: '4%' },
            { level: 'D', chance: '5%' },
            { level: 'E', chance: '6%' }
        ],
        weaponEnchantment5Values: [
            "攻击+ N %", "暴击率+ N %", "暴击伤害+ N %", "攻击、防御、生命+ N %",
            "暴击率+ N %", "暴击伤害+ N %", "暴击率+ N %", "暴击伤害+ N %",
            "攻击+ N %", "暴击率+ N %", "暴击伤害+ N %", "攻击+ N %",
            "暴击率+ N %", "暴击伤害+ N %", "暴击率+ N %", "暴击伤害+ N %"
        ],
        weaponEnchantment10Values: [
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害",
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害",
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害",
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害",
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害",
            "攻击时有15%机率提高 N %总伤害", "暴击时有60%机率提高 N %总伤害"
        ],
        weaponEnchantment15Values: [
            "攻击时无视敌人 N %防御",
            "暴击时无视敌人 N %防御",
            "对Boss造成的伤害增加 N %",
            "攻击时无视敌人 N %防御",
            "暴击时无视敌人 N %防御",
            "攻击时无视敌人 N %防御",
            "暴击时无视敌人 N %防御",
            "攻击时无视敌人 N %防御",
            "暴击时无视敌人 N %防御",
            "攻击时无视敌人 N %防御",
            "暴击时无视敌人 N %防御"
        ],
        armorEnchantment5Values: [
            "生命+ N %",
            "防御+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "宠物减伤+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "普攻减伤+ N %",
            "技能减伤+ N %",
            "宠物减伤+ N %",
        ],
        armorEnchantment10Values: [
            "受到伤害时有10%机率吸收 N %伤害",
            "受到伤害时有9%机率吸收 N %伤害",
            "受到伤害时有8%机率吸收 N %伤害",
            "受到攻击时有10%机率吸收 N %伤害",
            "受到攻击时有9%机率吸收 N %伤害",
            "受到暴击时有20%机率吸收 N %伤害",
            "受到攻击时有10%机率吸收 N %伤害",
            "受到攻击时有9%机率吸收 N %伤害",
            "受到暴击时有20%机率吸收 N %伤害",
            "受到攻击时有10%机率吸收 N %伤害",
            "受到攻击时有9%机率吸收 N %伤害",
            "受到暴击时有20%机率吸收 N %伤害",
            "受到攻击时有10%机率吸收 N %伤害",
            "受到攻击时有9%机率吸收 N %伤害",
            "受到暴击时有20%机率吸收 N %伤害",
            "受到攻击时有10%机率吸收 N %伤害",
            "受到攻击时有9%机率吸收 N %伤害",
            "受到暴击时有20%机率吸收 N %伤害",
        ],
        armorEnchantment15Values: [
            "受到伤害时有20%机率吸收 N %伤害",
            "受到伤害时有18%机率吸收 N %伤害",
            "受到伤害时有16%机率吸收 N %伤害",
            "受到攻击时有20%机率吸收 N %伤害",
            "受到攻击时有18%机率吸收 N %伤害",
            "受到暴击时有40%机率吸收 N %伤害",
            "受到攻击时有20%机率吸收 N %伤害",
            "受到攻击时有18%机率吸收 N %伤害",
            "受到暴击时有40%机率吸收 N %伤害",
            "受到攻击时有20%机率吸收 N %伤害",
            "受到攻击时有18%机率吸收 N %伤害",
            "受到暴击时有40%机率吸收 N %伤害",
            "受到攻击时有20%机率吸收 N %伤害",
            "受到攻击时有18%机率吸收 N %伤害",
            "受到暴击时有40%机率吸收 N %伤害",
            "受到攻击时有20%机率吸收 N %伤害",
            "受到攻击时有18%机率吸收 N %伤害",
            "受到暴击时有40%机率吸收 N %伤害",
        ],
        annexEnchantment5Values: [
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "攻速+ N %",
            "闪避+ N %",
            "暴击率+ N %",
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "暴击率+ N %",
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "暴击率+ N %",
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "暴击率+ N %",
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "暴击率+ N %",
            "攻击+ N %",
            "防御+ N %",
            "生命+ N %",
            "暴击率+ N %",
        ],
        annexEnchantment10Values: [
            "闪避+ N %",
            "无视闪避+ N %",
            "普攻伤害+ N %",
            "普攻减伤+ N %",
            "技能伤害+ N %",
            "技能减伤+ N %",
            "宠物伤害+ N %",
            "宠物减伤+ N %",
            "BOSS增伤+ N %",
            "BOSS减伤+ N %",
            "暴击伤害+ N %",
            "抗暴伤害+ N %",
            "治疗率+ N %",
            "治疗量+ N %",
        ],
        annexEnchantment15Values: [
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
            "提高 N %攻击",
            "提高 N %防御",
            "提高 N %生命",
            "提高 N %BOSS伤害",
            "提高 N %暴击伤害",
        ]
    }
};

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab.dataset.langKey).classList.add('active');
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = languagePack[lang][key];
    });

    // 使用共用的概率数据填充表格
    fillProbabilityTable('prefixProbabilityTable', commonProbabilityValues.prefix);
    fillProbabilityTable('suffixProbabilityTable', commonProbabilityValues.suffix);

    // 其他表格填充保持不变
    fillTable('enchantment5Table', languagePack[lang].weaponEnchantment5Values, ['S', 'S', 'S', 'S', 'A', 'A', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E']);
    fillTable('enchantment10Table', languagePack[lang].weaponEnchantment10Values, ['S', 'S', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']);
    fillTable('enchantment15Table', languagePack[lang].weaponEnchantment15Values, ['S', 'S', 'S', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']);

    fillTable('armorEnchantment5Table', languagePack[lang].armorEnchantment5Values, ['S', 'S', 'S', 'S', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'E']);
    fillTable('armorEnchantment10Table', languagePack[lang].armorEnchantment10Values, ['S', 'S', 'S', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E']);
    fillTable('armorEnchantment15Table', languagePack[lang].armorEnchantment15Values, ['S', 'S', 'S', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E']);

    fillTable('accessoryEnchantment5Table', languagePack[lang].annexEnchantment5Values, [
        "S", "S", "S", "S", "S", "S", "A", "A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E"
    ]);

    fillTable('accessoryEnchantment10Table', languagePack[lang].annexEnchantment10Values, [
        'S', 'S', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'
    ]);

    fillTable('accessoryEnchantment15Table', languagePack[lang].annexEnchantment15Values, [
        'S', 'S', 'S', 'S', 'S', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B',
        'C', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E'
    ]);
}

function fillProbabilityTable(tableId, values) {
    const table = document.getElementById(tableId);
    const tbody = document.createElement('tbody');
    // 使用共用的概率数据
    const probabilityData = tableId.includes('prefix') ? commonProbabilityValues.prefix : commonProbabilityValues.suffix;
    probabilityData.forEach(item => {
        const row = document.createElement('tr');
        const levelCell = document.createElement('td');
        const chanceCell = document.createElement('td');

        levelCell.textContent = item.level;
        chanceCell.textContent = item.chance;

        row.appendChild(levelCell);
        row.appendChild(chanceCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}

function fillTable(tableId, values, levels) {
    const table = document.getElementById(tableId);
    const tbody = document.createElement('tbody');
    values.forEach((value, index) => {
        const row = document.createElement('tr');
        const levelCell = document.createElement('td');
        const valueCell = document.createElement('td');
        //const chanceCell = document.createElement('td');

        levelCell.textContent = levels[index];
        valueCell.textContent = value;
        // chanceCell.textContent = '-';

        row.appendChild(levelCell);
        row.appendChild(valueCell);
        //row.appendChild(chanceCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有标签的active类
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // 为当前点击的标签添加active类
        tab.classList.add('active');

        // 显示对应的内容
        const contentId = tab.getAttribute('data-lang-key');
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none'; // 隐藏所有内容
        });
        document.getElementById(contentId).style.display = 'block'; // 显示当前内容
    });
});

// 假設從URL中獲取語言參數
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'tw'; // 默認為繁體中文
setLanguage(lang);

// 默认选中"机率"按钮
const defaultTab = document.querySelector('.tab[data-lang-key="probability"]');
if (defaultTab) {
    defaultTab.click(); // 模拟点击"机率"按钮
}
