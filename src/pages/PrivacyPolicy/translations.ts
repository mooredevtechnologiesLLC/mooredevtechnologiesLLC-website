/**
 * Privacy policy translations for multiple languages.
 * Includes English, Spanish, French, Japanese, and German.
 */

/** Supported language codes */
export type LanguageCode = 'en' | 'es' | 'fr' | 'ja' | 'de';

/** Language display information */
export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

/** Available languages with their display names */
export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

/** Privacy policy content structure */
export interface PrivacyPolicyContent {
  title: string;
  lastUpdated: string;
  lastUpdatedDate: string;
  overview: {
    title: string;
    paragraph1: string;
    highlight: string;
  };
  dataWeDoNotCollect: {
    title: string;
    paragraph1: string;
    list: string[];
    paragraph2: string;
  };
  applePlatformServices: {
    title: string;
    paragraph1: {
      text1: string;
      linkText: string;
      text2: string;
    };
    paragraph2: string;
  };
  inAppPurchases: {
    title: string;
    paragraph: string;
  };
  childrensPrivacy: {
    title: string;
    paragraph: string;
  };
  changesToPolicy: {
    title: string;
    paragraph: string;
  };
  contactUs: {
    title: string;
    paragraph: {
      text: string;
      linkText: string;
    };
  };
}

/** Privacy policy translations by language code */
export const PRIVACY_POLICY_TRANSLATIONS: Record<LanguageCode, PrivacyPolicyContent> = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated',
    lastUpdatedDate: 'August 9, 2026',
    overview: {
      title: 'Overview',
      paragraph1:
        'MooreDev Technologies LLC ("we," "us," or "our") develops mobile applications to help users manage daily tasks and executive-function needs. This policy describes our data practices for all apps we publish.',
      highlight:
        'We do not collect, store, or share any personal information from users of our apps.',
    },
    dataWeDoNotCollect: {
      title: 'Data We Do Not Collect',
      paragraph1:
        'These apps contain no analytics SDKs, no crash-reporting services, no advertising networks, and no third-party tracking of any kind. Specifically, we do not collect:',
      list: [
        'Names, email addresses, or any account information',
        'Location data',
        'Device identifiers or advertising IDs',
        'Usage analytics or behavioral data',
        'Crash logs or diagnostics',
        'Health or fitness data',
        'Financial or payment information',
      ],
      paragraph2:
        'All data you enter into the app (tasks, preferences, notes) is stored locally on your device only and never transmitted to our servers or any third party.',
    },
    applePlatformServices: {
      title: 'Apple Platform Services',
      paragraph1: {
        text1:
          "These apps run on Apple's iOS/iPadOS platforms. Apple may independently collect certain diagnostic and usage data as part of operating iOS and the App Store. This data collection is governed entirely by ",
        linkText: "Apple's Privacy Policy",
        text2:
          ' and is outside our control. We do not receive or have access to any of that data.',
      },
      paragraph2:
        "If you use iCloud (for device backup or cross-device sync of app data managed by iOS), that data is stored in your personal iCloud account and is governed by Apple's privacy practices, not ours.",
    },
    inAppPurchases: {
      title: 'In-App Purchases',
      paragraph:
        "Some of our apps may offer optional in-app purchases. All payment processing is handled exclusively by Apple through the App Store. We never see, receive, or store your payment information. Refer to Apple's privacy policy for details on how purchase transactions are handled.",
    },
    childrensPrivacy: {
      title: "Children's Privacy",
      paragraph:
        'Because we collect no personal information whatsoever, our apps do not knowingly collect data from children under 13 (or the applicable age of digital consent in your region). There is no data to collect, retain, or disclose.',
    },
    changesToPolicy: {
      title: 'Changes to This Policy',
      paragraph:
        'If our data practices ever change, we will update this page and revise the "Last updated" date above. We encourage you to review this policy periodically. Continued use of the apps after any changes constitutes acceptance of the updated policy.',
    },
    contactUs: {
      title: 'Contact Us',
      paragraph: {
        text: 'If you have any questions about this privacy policy, please contact us at ',
        linkText: 'support@mooredevtechnologies.com',
      },
    },
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización',
    lastUpdatedDate: '1 de agosto de 2026',
    overview: {
      title: 'Resumen',
      paragraph1:
        'MooreDev Technologies LLC ("nosotros", "nos" o "nuestro") desarrolla aplicaciones móviles para ayudar a los usuarios a gestionar tareas diarias y necesidades de función ejecutiva. Esta política describe nuestras prácticas de datos para todas las aplicaciones que publicamos.',
      highlight:
        'No recopilamos, almacenamos ni compartimos ninguna información personal de los usuarios de nuestras aplicaciones.',
    },
    dataWeDoNotCollect: {
      title: 'Datos que NO Recopilamos',
      paragraph1:
        'Estas aplicaciones no contienen SDK de análisis, servicios de informes de fallos, redes publicitarias ni seguimiento de terceros de ningún tipo. Específicamente, no recopilamos:',
      list: [
        'Nombres, direcciones de correo electrónico o cualquier información de cuenta',
        'Datos de ubicación',
        'Identificadores de dispositivo o ID de publicidad',
        'Análisis de uso o datos de comportamiento',
        'Registros de fallos o diagnósticos',
        'Datos de salud o fitness',
        'Información financiera o de pago',
      ],
      paragraph2:
        'Todos los datos que ingresas en la aplicación (tareas, preferencias, notas) se almacenan localmente solo en tu dispositivo y nunca se transmiten a nuestros servidores ni a terceros.',
    },
    applePlatformServices: {
      title: 'Servicios de la Plataforma Apple',
      paragraph1: {
        text1:
          'Estas aplicaciones se ejecutan en las plataformas iOS/iPadOS de Apple. Apple puede recopilar de forma independiente ciertos datos de diagnóstico y uso como parte del funcionamiento de iOS y la App Store. Esta recopilación de datos se rige completamente por la ',
        linkText: 'Política de Privacidad de Apple',
        text2:
          ' y está fuera de nuestro control. No recibimos ni tenemos acceso a ninguno de esos datos.',
      },
      paragraph2:
        'Si usas iCloud (para copia de seguridad del dispositivo o sincronización entre dispositivos de datos de aplicaciones gestionados por iOS), esos datos se almacenan en tu cuenta personal de iCloud y se rigen por las prácticas de privacidad de Apple, no las nuestras.',
    },
    inAppPurchases: {
      title: 'Compras Dentro de la Aplicación',
      paragraph:
        'Algunas de nuestras aplicaciones pueden ofrecer compras dentro de la aplicación opcionales. Todo el procesamiento de pagos es manejado exclusivamente por Apple a través de la App Store. Nunca vemos, recibimos ni almacenamos tu información de pago. Consulta la política de privacidad de Apple para obtener detalles sobre cómo se manejan las transacciones de compra.',
    },
    childrensPrivacy: {
      title: 'Privacidad de los Niños',
      paragraph:
        'Debido a que no recopilamos ninguna información personal, nuestras aplicaciones no recopilan a sabiendas datos de niños menores de 13 años (o la edad aplicable de consentimiento digital en tu región). No hay datos que recopilar, retener o divulgar.',
    },
    changesToPolicy: {
      title: 'Cambios a Esta Política',
      paragraph:
        'Si nuestras prácticas de datos cambian alguna vez, actualizaremos esta página y revisaremos la fecha de "Última actualización" arriba. Te animamos a revisar esta política periódicamente. El uso continuo de las aplicaciones después de cualquier cambio constituye la aceptación de la política actualizada.',
    },
    contactUs: {
      title: 'Contáctanos',
      paragraph: {
        text: 'Si tienes alguna pregunta sobre esta política de privacidad, contáctanos en ',
        linkText: 'support@mooredevtechnologies.com',
      },
    },
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour',
    lastUpdatedDate: '1er août 2026',
    overview: {
      title: 'Aperçu',
      paragraph1:
        'MooreDev Technologies LLC (« nous », « notre » ou « nos ») développe des applications mobiles pour aider les utilisateurs à gérer les tâches quotidiennes et les besoins de fonction exécutive. Cette politique décrit nos pratiques en matière de données pour toutes les applications que nous publions.',
      highlight:
        "Nous ne collectons, ne stockons ni ne partageons aucune information personnelle des utilisateurs de nos applications.",
    },
    dataWeDoNotCollect: {
      title: 'Données que Nous NE Collectons PAS',
      paragraph1:
        "Ces applications ne contiennent aucun SDK d'analyse, aucun service de rapport de plantage, aucun réseau publicitaire et aucun suivi tiers d'aucune sorte. Plus précisément, nous ne collectons pas :",
      list: [
        'Noms, adresses e-mail ou toute information de compte',
        'Données de localisation',
        'Identifiants de dispositif ou ID publicitaires',
        "Analyses d'utilisation ou données comportementales",
        'Journaux de plantage ou diagnostics',
        'Données de santé ou de fitness',
        'Informations financières ou de paiement',
      ],
      paragraph2:
        "Toutes les données que vous saisissez dans l'application (tâches, préférences, notes) sont stockées localement sur votre appareil uniquement et ne sont jamais transmises à nos serveurs ou à des tiers.",
    },
    applePlatformServices: {
      title: "Services de la Plateforme Apple",
      paragraph1: {
        text1:
          "Ces applications fonctionnent sur les plateformes iOS/iPadOS d'Apple. Apple peut collecter de manière indépendante certaines données de diagnostic et d'utilisation dans le cadre du fonctionnement d'iOS et de l'App Store. Cette collecte de données est entièrement régie par la ",
        linkText: "Politique de Confidentialité d'Apple",
        text2:
          " et échappe à notre contrôle. Nous ne recevons ni n'avons accès à aucune de ces données.",
      },
      paragraph2:
        "Si vous utilisez iCloud (pour la sauvegarde de l'appareil ou la synchronisation inter-appareils des données d'application gérées par iOS), ces données sont stockées dans votre compte iCloud personnel et sont régies par les pratiques de confidentialité d'Apple, pas les nôtres.",
    },
    inAppPurchases: {
      title: "Achats Intégrés",
      paragraph:
        "Certaines de nos applications peuvent proposer des achats intégrés optionnels. Tous les traitements de paiement sont gérés exclusivement par Apple via l'App Store. Nous ne voyons, ne recevons ni ne stockons jamais vos informations de paiement. Consultez la politique de confidentialité d'Apple pour plus de détails sur la gestion des transactions d'achat.",
    },
    childrensPrivacy: {
      title: 'Confidentialité des Enfants',
      paragraph:
        "Parce que nous ne collectons aucune information personnelle, nos applications ne collectent pas sciemment de données auprès d'enfants de moins de 13 ans (ou l'âge applicable du consentement numérique dans votre région). Il n'y a aucune donnée à collecter, conserver ou divulguer.",
    },
    changesToPolicy: {
      title: 'Modifications de Cette Politique',
      paragraph:
        'Si nos pratiques en matière de données changent un jour, nous mettrons à jour cette page et réviserons la date de « Dernière mise à jour » ci-dessus. Nous vous encourageons à consulter cette politique périodiquement. L\'utilisation continue des applications après tout changement constitue l\'acceptation de la politique mise à jour.',
    },
    contactUs: {
      title: 'Nous Contacter',
      paragraph: {
        text: 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à ',
        linkText: 'support@mooredevtechnologies.com',
      },
    },
  },
  ja: {
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日',
    lastUpdatedDate: '2026年8月1日',
    overview: {
      title: '概要',
      paragraph1:
        'MooreDev Technologies LLC（「当社」、「弊社」、または「私たち」）は、ユーザーが日常のタスクや実行機能のニーズを管理するのに役立つモバイルアプリケーションを開発しています。このポリシーは、当社が公開するすべてのアプリのデータ慣行について説明しています。',
      highlight:
        '当社は、アプリのユーザーから個人情報を収集、保存、または共有することはありません。',
    },
    dataWeDoNotCollect: {
      title: '収集しないデータ',
      paragraph1:
        'これらのアプリには、分析SDK、クラッシュレポートサービス、広告ネットワーク、およびあらゆる種類のサードパーティトラッキングが含まれていません。具体的には、以下を収集しません：',
      list: [
        '名前、メールアドレス、またはアカウント情報',
        '位置情報データ',
        'デバイス識別子または広告ID',
        '使用状況分析または行動データ',
        'クラッシュログまたは診断情報',
        '健康またはフィットネスデータ',
        '財務または支払い情報',
      ],
      paragraph2:
        'アプリに入力したすべてのデータ（タスク、設定、メモ）は、お使いのデバイスにのみローカルに保存され、当社のサーバーまたは第三者に送信されることはありません。',
    },
    applePlatformServices: {
      title: 'AppleプラットフォームサービS',
      paragraph1: {
        text1:
          'これらのアプリは、AppleのiOS/iPadOSプラットフォームで動作します。Appleは、iOSおよびApp Storeの運営の一環として、特定の診断および使用状況データを独自に収集する場合があります。このデータ収集は、完全に',
        linkText: 'Appleのプライバシーポリシー',
        text2:
          'によって管理されており、当社の管理外です。当社はそのデータを受け取ったり、アクセスしたりすることはありません。',
      },
      paragraph2:
        'iCloud（デバイスのバックアップまたはiOSによって管理されるアプリデータのデバイス間同期用）を使用する場合、そのデータは個人のiCloudアカウントに保存され、当社ではなくAppleのプライバシー慣行によって管理されます。',
    },
    inAppPurchases: {
      title: 'アプリ内購入',
      paragraph:
        '一部のアプリでは、オプションのアプリ内購入を提供する場合があります。すべての支払い処理は、App Storeを通じてAppleによって独占的に処理されます。当社はお客様の支払い情報を閲覧、受信、または保存することはありません。購入取引の処理方法の詳細については、Appleのプライバシーポリシーを参照してください。',
    },
    childrensPrivacy: {
      title: '児童のプライバシー',
      paragraph:
        '当社は個人情報を一切収集していないため、当社のアプリは13歳未満の児童（またはお住まいの地域で適用されるデジタル同意年齢）からデータを意図的に収集することはありません。収集、保持、または開示するデータはありません。',
    },
    changesToPolicy: {
      title: 'このポリシーの変更',
      paragraph:
        '当社のデータ慣行が変更された場合、このページを更新し、上記の「最終更新日」を修正します。このポリシーを定期的に確認することをお勧めします。変更後もアプリを継続して使用することは、更新されたポリシーの受け入れを構成します。',
    },
    contactUs: {
      title: 'お問い合わせ',
      paragraph: {
        text: 'このプライバシーポリシーに関してご質問がある場合は、',
        linkText: 'support@mooredevtechnologies.com',
      },
    },
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert',
    lastUpdatedDate: '1. August 2026',
    overview: {
      title: 'Überblick',
      paragraph1:
        'MooreDev Technologies LLC („wir", „uns" oder „unser") entwickelt mobile Anwendungen, um Benutzern bei der Verwaltung täglicher Aufgaben und exekutiven Funktionsbedürfnissen zu helfen. Diese Richtlinie beschreibt unsere Datenpraktiken für alle von uns veröffentlichten Apps.',
      highlight:
        'Wir sammeln, speichern oder teilen keine persönlichen Informationen von Benutzern unserer Apps.',
    },
    dataWeDoNotCollect: {
      title: 'Daten, die Wir NICHT Sammeln',
      paragraph1:
        'Diese Apps enthalten keine Analyse-SDKs, keine Absturzbericht-Dienste, keine Werbenetzwerke und keinerlei Tracking durch Dritte. Insbesondere sammeln wir nicht:',
      list: [
        'Namen, E-Mail-Adressen oder Kontoinformationen',
        'Standortdaten',
        'Geräte-IDs oder Werbe-IDs',
        'Nutzungsanalysen oder Verhaltensdaten',
        'Absturzprotokolle oder Diagnosen',
        'Gesundheits- oder Fitnessdaten',
        'Finanz- oder Zahlungsinformationen',
      ],
      paragraph2:
        'Alle Daten, die Sie in die App eingeben (Aufgaben, Einstellungen, Notizen), werden nur lokal auf Ihrem Gerät gespeichert und niemals an unsere Server oder Dritte übertragen.',
    },
    applePlatformServices: {
      title: 'Apple-Plattformdienste',
      paragraph1: {
        text1:
          'Diese Apps laufen auf Apples iOS/iPadOS-Plattformen. Apple kann unabhängig bestimmte Diagnose- und Nutzungsdaten im Rahmen des Betriebs von iOS und dem App Store sammeln. Diese Datenerfassung wird vollständig durch ',
        linkText: 'Apples Datenschutzerklärung',
        text2:
          ' geregelt und liegt außerhalb unserer Kontrolle. Wir erhalten oder haben keinen Zugriff auf diese Daten.',
      },
      paragraph2:
        'Wenn Sie iCloud verwenden (für Gerätesicherung oder geräteübergreifende Synchronisierung von von iOS verwalteten App-Daten), werden diese Daten in Ihrem persönlichen iCloud-Konto gespeichert und unterliegen den Datenschutzpraktiken von Apple, nicht unseren.',
    },
    inAppPurchases: {
      title: 'In-App-Käufe',
      paragraph:
        'Einige unserer Apps können optionale In-App-Käufe anbieten. Alle Zahlungsabwicklungen werden ausschließlich von Apple über den App Store abgewickelt. Wir sehen, erhalten oder speichern niemals Ihre Zahlungsinformationen. Weitere Informationen zur Abwicklung von Kauftransaktionen finden Sie in der Datenschutzerklärung von Apple.',
    },
    childrensPrivacy: {
      title: 'Datenschutz für Kinder',
      paragraph:
        'Da wir überhaupt keine persönlichen Informationen sammeln, sammeln unsere Apps wissentlich keine Daten von Kindern unter 13 Jahren (oder dem in Ihrer Region geltenden Alter für digitale Einwilligung). Es gibt keine Daten zu sammeln, aufzubewahren oder offenzulegen.',
    },
    changesToPolicy: {
      title: 'Änderungen an Dieser Richtlinie',
      paragraph:
        'Wenn sich unsere Datenpraktiken jemals ändern, werden wir diese Seite aktualisieren und das oben genannte Datum „Zuletzt aktualisiert" überarbeiten. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen. Die fortgesetzte Nutzung der Apps nach Änderungen stellt die Akzeptanz der aktualisierten Richtlinie dar.',
    },
    contactUs: {
      title: 'Kontaktieren Sie Uns',
      paragraph: {
        text: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter ',
        linkText: 'support@mooredevtechnologies.com',
      },
    },
  },
};
