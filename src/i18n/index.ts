import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          steps: {
            details: 'Report Details',
            review: 'Review & Confirm',
            success: 'Confirmation'
          },
          sidebar: {
            title: 'Emergency Guide',
            hotline112Label: 'European Emergency Line',
            hotline112Value: '112 (Free Call)',
            safeTeamLabel: 'ESN Safe Team Hotline',
            guidelineTitle: 'Incident Reporting Rules',
            guideline1: 'Provide clear details and a specific location.',
            guideline2: 'Toggle Anonymous Mode if you prefer absolute privacy.',
            guideline3: 'Upload documents or photos to support your report.',
          },
          form: {
            tabs: {
              standard: 'Standard Help',
              urgent: 'Urgent Case'
            },
            dutyTeam: {
              title: 'Safe Team members on duty:',
              member1: 'Alice',
              member2: 'Thomas',
              role: 'MEMBER'
            },
            anonLabel: 'Send Anonymously',
            anonDesc: 'Hide your identity from the report',
            firstName: 'First Name',
            lastName: 'Last Name',
            esnCard: 'ESN Card Number',
            location: 'Location / Room Number',
            subject: 'Subject / Incident Category',
            description: 'How can we help?',
            uploadDoc: 'Attach Proof (Optional)',
            chooseFile: 'Choose File',
            subjects: {
              harassment: 'Harassment & Discrimination',
              medical: 'Medical or Physical Injury',
              lost: 'Lost Property or Person',
              general: 'General Support',
              other: 'Other / Custom'
            },
            validation: {
              firstNameReq: 'First name is required',
              lastNameReq: 'Last name is required',
              esnCardReq: 'ESN Card number is required',
              locationReq: 'Location is required',
              subjectReq: 'Subject is required',
              descriptionReq: 'Description is required',
              descriptionMin: 'Description must be at least 10 characters long'
            }
          },
          review: {
            title: 'Verify Details',
            subtitle: 'Please review your incident report before submitting.',
            reportingMode: 'Reporting Mode',
            urgencyLabel: 'Incident Urgency',
            urgent: '🚨 URGENT CASE (High Priority)',
            standard: 'Standard Help (Normal Priority)',
            anonYes: 'Anonymous (Identity Protected)',
            anonNo: 'Identity Visible',
            identityDetails: 'Identity Details',
            incidentDetails: 'Incident Details',
            attachedFile: 'Attached Document / Evidence',
            none: 'None'
          },
          success: {
            titleStandard: 'Incident Report Received',
            titleUrgent: '🚨 Urgent Alert Dispatched!',
            descStandard: 'Your incident report has been received by the ESN Safe Team. We will contact you or take actions shortly.',
            descUrgent: 'Your urgent alert has been dispatched directly to the ESN Safe Team on duty. We are taking immediate actions to assist you.',
            refNumber: 'Your report reference number is',
            returnBtn: 'Submit another report'
          },
          buttons: {
            next: 'Next',
            back: 'Previous',
            submit: 'Submit',
          }
        },
      },
      fr: {
        translation: {
          steps: {
            details: 'Détails du Signalement',
            review: 'Vérifier & Confirmer',
            success: 'Confirmation'
          },
          sidebar: {
            title: 'Guide d\'Urgence',
            hotline112Label: 'Ligne d\'Urgence Européenne',
            hotline112Value: '112 (Appel Gratuit)',
            safeTeamLabel: 'Ligne Directe ESN Safe Team',
            guidelineTitle: 'Règles de Signalement',
            guideline1: 'Fournissez des détails clairs et un lieu précis.',
            guideline2: 'Activez le mode anonyme si vous préférez une confidentialité totale.',
            guideline3: 'Téléchargez des documents ou photos pour étayer votre rapport.',
          },
          form: {
            tabs: {
              standard: 'Assistance Standard',
              urgent: 'Cas Urgent'
            },
            dutyTeam: {
              title: 'Membres de la Safe Team de garde :',
              member1: 'Alice',
              member2: 'Thomas',
              role: 'MEMBRE'
            },
            anonLabel: 'Envoyer de manière anonyme',
            anonDesc: 'Masquer votre identité dans le rapport',
            firstName: 'Prénom',
            lastName: 'Nom',
            esnCard: 'Numéro de Carte ESN',
            location: 'Localisation / Numéro de Chambre',
            subject: 'Sujet / Catégorie d\'Incident',
            description: 'Comment pouvons-nous vous aider ?',
            uploadDoc: 'Joindre une Preuve (Optionnel)',
            chooseFile: 'Choisir un fichier',
            subjects: {
              harassment: 'Harcèlement & Discrimination',
              medical: 'Urgence Médicale ou Physique',
              lost: 'Objet ou Personne Perdu(e)',
              general: 'Soutien Général',
              other: 'Autre / Personnalisé'
            },
            validation: {
              firstNameReq: 'Le prénom est requis',
              lastNameReq: 'Le nom de famille est requis',
              esnCardReq: 'Le numéro de carte ESN est requis',
              locationReq: 'La localisation est requise',
              subjectReq: 'Le sujet est requis',
              descriptionReq: 'La description est requise',
              descriptionMin: 'La description doit comporter au moins 10 caractères'
            }
          },
          review: {
            title: 'Vérifier les Détails',
            subtitle: 'Veuillez vérifier vos informations avant de les soumettre.',
            reportingMode: 'Mode de Signalement',
            urgencyLabel: 'Urgence de l\'Incident',
            urgent: '🚨 CAS URGENT (Priorité Élevée)',
            standard: 'Assistance Standard (Priorité Normale)',
            anonYes: 'Anonyme (Identité Protégée)',
            anonNo: 'Identité Visible',
            identityDetails: 'Détails d\'Identité',
            incidentDetails: 'Détails de l\'Incident',
            attachedFile: 'Document / Preuve Joint',
            none: 'Aucun'
          },
          success: {
            titleStandard: 'Signalement Reçu',
            titleUrgent: '🚨 Alerte Urgente Déclenchée !',
            descStandard: 'Votre rapport d\'incident a bien été reçu par l\'équipe ESN Safe Team. Nous vous contacterons sous peu.',
            descUrgent: 'Votre alerte urgente a été envoyée directement aux membres de garde. Nous prenons des mesures immédiates pour vous aider.',
            refNumber: 'Votre numéro de référence de signalement est',
            returnBtn: 'Soumettre un autre rapport'
          },
          buttons: {
            next: 'Suivant',
            back: 'Précédent',
            submit: 'Suivant',
          }
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;