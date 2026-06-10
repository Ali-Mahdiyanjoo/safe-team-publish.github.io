import * as React from 'react';
import { Box, TextField, Grid, Typography, Button, Switch, MenuItem, Select, FormControl, FormHelperText, Tabs, Tab, Collapse, Paper } from '@mui/material';
import { useFormContext, Controller, useWatch } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import InputLabel from '@mui/material/InputLabel';
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from 'react-i18next';

export default function AddressForm({ children }: { children?: React.ReactNode }) {
  const { control } = useFormContext();
  const { t } = useTranslation();

  const isUrgent = useWatch({ control, name: 'isUrgent', defaultValue: false });
  const isActive = useWatch({ control, name: 'isAnonymous', defaultValue: false });



  const subjects = [
    { value: "harassment", label: t('form.subjects.harassment') },
    { value: "medical", label: t('form.subjects.medical') },
    { value: "lost", label: t('form.subjects.lost') },
    { value: "general", label: t('form.subjects.general') },
    { value: "other", label: t('form.subjects.other') },
  ];

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 2, sm: 3 },
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
      <Grid 
        container 
        spacing={3} 
        sx={{ width: '100%', m: 0 }}
      >
      {/* 1. Standard Help vs Urgent Case Tabs */}
      <Grid size={12} sx={{ mb: 1 }}>
        <Controller
          name="isUrgent"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Tabs
              value={value ? 1 : 0}
              onChange={(e, val) => onChange(val === 1)}
              centered
              variant="fullWidth"
              sx={{
                bgcolor: 'action.hover',
                borderRadius: 2,
                p: 0.5,
                minHeight: 'unset',
                '& .MuiTabs-indicator': {
                  backgroundColor: value ? '#d32f2f' : 'primary.main',
                  height: '100%',
                  borderRadius: 1.5,
                  opacity: 0.12,
                },
                '& .MuiTab-root': {
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  borderRadius: 1.5,
                  minHeight: '40px',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    color: value ? '#d32f2f' : 'primary.main',
                  }
                }
              }}
            >
              <Tab label={t('form.tabs.standard')} />
              <Tab label={t('form.tabs.urgent')} />
            </Tabs>
          )}
        />
      </Grid>





      {/* 4. Sliding Switch Anonymous Banner */}
      <Grid size={12}>
        <Box sx={{
          p: 2,
          bgcolor: 'action.hover',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2.5,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              p: 1.2, 
              bgcolor: isActive ? 'rgba(211, 47, 47, 0.08)' : 'rgba(27, 94, 32, 0.08)', 
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {isActive ? (
                <PersonOffIcon sx={{ color: '#d32f2f' }} />
              ) : (
                <PersonIcon sx={{ color: '#1b5e20' }} />
              )}
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {t('form.anonLabel')}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {t('form.anonDesc')}
              </Typography>
            </Box>
          </Box>
          <Controller
            name="isAnonymous"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                checked={value}
                color="error"
                onChange={(e) => onChange(e.target.checked)}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: value ? '#d32f2f' : '#1b5e20',
                  },
                }}
              />
            )}
          />
        </Box>
      </Grid>

      {/* 5. Personal Details Collapse Block */}
      <Grid size={12}>
        <Collapse in={!isActive} timeout={400} sx={{ width: '100%' }}>
          <Grid container spacing={3} sx={{ pt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: !isActive ? t('form.validation.firstNameReq') : false }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label={t('form.firstName')}
                    fullWidth
                    required
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: !isActive ? t('form.validation.lastNameReq') : false }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label={t('form.lastName')}
                    fullWidth
                    required
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="esnCard"
                control={control}
                rules={{ required: !isActive ? t('form.validation.esnCardReq') : false }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label={t('form.esnCard')}
                    fullWidth
                    required
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="location"
                control={control}
                rules={{ required: !isActive ? t('form.validation.locationReq') : false }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label={t('form.location')}
                    fullWidth
                    required
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Collapse>
      </Grid>

      {/* 6. Incident Details & Description */}
      <Grid size={12}>
        <Controller
          name="subject"
          control={control}
          rules={{ required: t('form.validation.subjectReq') }}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              required
              error={!!fieldState.error}
            >
              <InputLabel id="subject-label">{t('form.subject')}</InputLabel>
              <Select
                {...field}
                labelId="subject-label"
                label={t('form.subject')}
                required
              >
                {subjects.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
              {fieldState.error && (
                <FormHelperText>
                  {fieldState.error.message}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={12}>
        <Controller
          name="description"
          control={control}
          rules={{ 
            required: t('form.validation.descriptionReq'), 
            minLength: { value: 10, message: t('form.validation.descriptionMin') } 
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t('form.description')}
              multiline
              rows={4}
              fullWidth
              required
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>

      <Grid size={12}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'medium' }}>
          {t('form.uploadDoc')}
        </Typography>
        <Controller
          name="file"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              fullWidth
              sx={{ 
                height: '56px', 
                justifyContent: 'flex-start', 
                px: 2,
                borderStyle: 'dashed'
              }}
            >
              <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {value ? (value as File).name : t('form.chooseFile')}
              </Box>
              <input
                type="file"
                hidden
                onChange={(e) => {
                  if (e.target.files) onChange(e.target.files[0]);
                }}
              />
            </Button>
          )}
        />
      </Grid>
      </Grid>
      {children}
    </Paper>
  );
}