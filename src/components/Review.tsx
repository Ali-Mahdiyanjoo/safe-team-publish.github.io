import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BadgeIcon from '@mui/icons-material/Badge';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function Review({ children }: { children?: React.ReactNode }) {
  const { getValues } = useFormContext();
  const { t } = useTranslation();
  
  const values = getValues();
  const isUrgent = values.isUrgent || false;
  const isAnonymous = values.isAnonymous || false;
  const firstName = values.firstName || '';
  const lastName = values.lastName || '';
  const esnCard = values.esnCard || '';
  const location = values.location || '';
  const subjectKey = values.subject || 'other';
  const description = values.description || '';
  const file = values.file as File | null;

  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: isUrgent ? '#d32f2f' : 'primary.main' }}>
          🔍 {t('review.title')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('review.subtitle')}
        </Typography>
      </Box>

      <Paper 
        variant="outlined" 
        sx={{ 
          p: 3, 
          borderRadius: 3, 
          bgcolor: 'background.default',
          border: '1.5px solid',
          borderColor: isUrgent ? 'error.main' : 'primary.light',
          boxShadow: isUrgent 
            ? '0 0 15px rgba(211, 47, 47, 0.12)' 
            : '0 0 15px rgba(25, 118, 210, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Stack spacing={2.5}>
          {/* Incident Urgency and Reporting Mode */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1, fontWeight: 'bold' }}>
                ⚡ {t('review.urgencyLabel')}
              </Typography>
              <Chip
                icon={<PriorityHighIcon sx={{ color: isUrgent ? '#fff !important' : 'inherit' }} />}
                label={isUrgent ? t('review.urgent') : t('review.standard')}
                color={isUrgent ? "error" : "primary"}
                variant="filled"
                sx={{ 
                  fontWeight: 'bold', 
                  fontSize: '0.8rem',
                  px: 1,
                  color: '#fff'
                }}
              />
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1, fontWeight: 'bold' }}>
                👤 {t('review.reportingMode')}
              </Typography>
              <Chip
                icon={isAnonymous ? <PersonOffIcon /> : <PersonIcon />}
                label={isAnonymous ? t('review.anonYes') : t('review.anonNo')}
                color={isAnonymous ? "error" : "success"}
                variant="outlined"
                sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}
              />
            </Grid>
          </Grid>

          <Divider />

          {/* Identity Details */}
          {!isAnonymous && (
            <Box>
              <Typography variant="subtitle2" sx={{ color: isUrgent ? '#d32f2f' : 'primary.main', mb: 1.5, fontWeight: 'bold' }}>
                👤 {t('review.identityDetails')}
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {t('form.firstName')} / {t('form.lastName')}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                    {firstName} {lastName}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {t('form.esnCard')}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <BadgeIcon fontSize="small" sx={{ color: 'text.secondary' }} /> {esnCard}
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {t('form.location')}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <LocationOnIcon fontSize="small" sx={{ color: 'text.secondary' }} /> {location}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}

          {!isAnonymous && <Divider />}

          {/* Incident details */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: isUrgent ? '#d32f2f' : 'primary.main', mb: 1.5, fontWeight: 'bold' }}>
              ⚠️ {t('review.incidentDetails')}
            </Typography>
            <Stack spacing={2}>
              <div>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {t('form.subject')}
                </Typography>
                <Box sx={{ mt: 0.5 }}>
                  <Chip
                    label={t(`form.subjects.${subjectKey}`)}
                    color={isUrgent ? "error" : "primary"}
                    size="small"
                    sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
                  />
                </Box>
              </div>

              <div>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5, display: 'block' }}>
                  {t('form.description')}
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'action.hover',
                    borderRadius: 1.5,
                    borderLeft: '4px solid',
                    borderColor: isUrgent ? 'error.main' : 'primary.main',
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, fontWeight: 'medium' }}>
                    {description}
                  </Typography>
                </Box>
              </div>
            </Stack>
          </Box>

          <Divider />

          {/* Evidence */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1, fontWeight: 'bold' }}>
              📎 {t('review.attachedFile')}
            </Typography>
            {file ? (
              <Chip
                icon={<AttachFileIcon />}
                label={`${file.name} (${(file.size / 1024).toFixed(1)} KB)`}
                variant="outlined"
                color={isUrgent ? "error" : "primary"}
                sx={{ fontWeight: 'bold' }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {t('review.none')}
              </Typography>
            )}
          </Box>
          {children}
        </Stack>
      </Paper>
    </Stack>
  );
}