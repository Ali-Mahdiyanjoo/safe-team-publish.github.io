import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddressForm from '../components/AddressForm';
import Info from '../components/Info';
import InfoMobile from '../components/InfoMobile';
import Review from '../components/Review';
import AppTheme from '../theme/AppThem';
import ColorModeSelect from '../theme/ColorModeSelect';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface FormValues {
  firstName: string;
  lastName: string;
  esnCard: string;
  location: string;
  description: string;
  subject: string;
  isAnonymous: boolean;
  file: File | null;
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [refNumber, setRefNumber] = React.useState(() => Math.floor(100000 + Math.random() * 900000));

  const steps = [
    t('steps.details'),
    t('steps.review'),
    t('steps.success')
  ];

  const methods = useForm<FormValues>({
    mode: 'all',
    shouldUnregister: false,
    defaultValues: {
      firstName: '',
      lastName: '',
      esnCard: '',
      location: '',
      description: '',
      subject: '',
      isAnonymous: false,
      file: null,
    }
  });

  const currentLanguage = i18n.language || 'en';
  const toggleLanguage = () => {
    const nextLang = currentLanguage.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      const isAnonymous = methods.getValues('isAnonymous');
      const fieldsToValidate: Array<keyof FormValues> = isAnonymous
        ? ['subject', 'description']
        : ['firstName', 'lastName', 'esnCard', 'location', 'subject', 'description'];

      const result = await methods.trigger(fieldsToValidate);
      if (result) {
        setActiveStep((prev) => prev + 1);
      }
    } else if (activeStep === 1) {
      // Advance to success step (step 2)
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    methods.reset();
    setRefNumber(Math.floor(100000 + Math.random() * 900000));
    setActiveStep(0);
  };

  function getStepContent(step: number, buttons?: React.ReactNode) {
    switch (step) {
      case 0:
        return <AddressForm>{buttons}</AddressForm>;
      case 1:
        return <Review>{buttons}</Review>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box sx={{ 
        position: 'absolute', 
        top: '1rem', 
        right: '1rem', 
        display: 'flex', 
        gap: 1, 
        alignItems: 'center', 
        bgcolor: 'background.paper',
        p: 0.5,
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<LanguageIcon />}
          onClick={toggleLanguage}
          sx={{
            borderRadius: 2,
            textTransform: 'uppercase',
            minWidth: '75px',
            borderColor: 'divider',
            color: 'text.primary',
            '&:hover': {
              borderColor: 'text.primary',
              bgcolor: 'action.hover'
            }
          }}
        >
          {currentLanguage.startsWith('fr') ? 'EN' : 'FR'}
        </Button>
        <ColorModeSelect />
      </Box>

      <Grid
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100dvh - var(--template-frame-height, 0px))',
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 10,
            px: 10,
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <img src="/favicon.svg" alt="ESN Logo" style={{ height: 36 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
               {t('sidebar.title')}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info />
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 10 },
            px: { xs: 2, sm: 15 },
            gap: { xs: 4, md: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'start',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{ width: '100%', height: 15, mb:2 }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', mb: 2, mt:4 }}>
            <CardContent
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                🚨 {t('sidebar.title')}
              </Typography>
              <InfoMobile />
            </CardContent>
          </Card>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: 'flex', md: 'none' } }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ':first-child': { pl: 0 },
                    ':last-child': { pr: 0 },
                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 2 ? (
              <Stack spacing={3} useFlexGap sx={{ mt: 4, alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h1" sx={{ fontSize: '4.5rem' }}>✅</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                  {t('success.titleStandard')}
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 'normal' }}>
                  {t('steps.success')}
                </Typography>
                <Paper variant="outlined" sx={{ px: 3, py: 1.5, bgcolor: 'action.hover', borderRadius: 2, borderStyle: 'dashed' }}>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {t('success.refNumber')}{' '}
                    <strong>#ESN-{refNumber}</strong>
                  </Typography>
                </Paper>
                <Button
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                  onClick={handleReset}
                  sx={{ alignSelf: 'center', mt: 2, borderRadius: 2, px: 3, py: 1 }}
                >
                  {t('success.returnBtn')}
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                  <FormProvider {...methods}>
                    {getStepContent(activeStep, 
                      <Box
                        sx={[
                          {
                            display: 'flex',
                            flexDirection: { xs: 'column-reverse', sm: 'row' },
                            alignItems: 'center',
                            gap: 2,
                            mt: 5,
                          },
                          activeStep !== 0
                            ? { justifyContent: 'space-between' }
                            : { justifyContent: 'flex-end' },
                        ]}
                      >
                        {activeStep !== 0 && (
                          <Button
                            startIcon={<ChevronLeftRoundedIcon />}
                            onClick={handleBack}
                            variant="text"
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                          >
                            {t('buttons.back')}
                          </Button>
                        )}
                        {activeStep !== 0 && (
                          <Button
                            startIcon={<ChevronLeftRoundedIcon />}
                            onClick={handleBack}
                            variant="outlined"
                            fullWidth
                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                          >
                            {t('buttons.back')}
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          endIcon={activeStep === 1 ? <SendIcon /> : <ChevronRightRoundedIcon />}
                          onClick={handleNext}
                          color={activeStep === 1 ? 'error' : 'primary'}
                          sx={{ borderRadius: 2, px: 3, width: { xs: '100%', sm: 'auto' } }}
                        >
                          {activeStep === 1 ? t('buttons.submit') : t('buttons.next')}
                        </Button>
                      </Box>
                    )}
                  </FormProvider>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}
