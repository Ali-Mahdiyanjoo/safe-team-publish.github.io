import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import ShieldIcon from '@mui/icons-material/Shield';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const { t } = useTranslation();

  const contacts = [
    {
      label: t('sidebar.hotline112Label'),
      value: t('sidebar.hotline112Value'),
      icon: <ShieldIcon sx={{ color: '#d32f2f' }} />,
    },
    {
      label: t('sidebar.safeTeamLabel'),
      value: '+33 6 12 34 56 78',
      icon: <PhoneIcon sx={{ color: '#1976d2' }} />,
    },
  ];

  const guidelines = [
    t('sidebar.guideline1'),
    t('sidebar.guideline2'),
    t('sidebar.guideline3'),
  ];

  return (
    <Box sx={{ width: '100%' }}>

      {/* Safe Team Members on Duty */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.04) 0%, rgba(79, 70, 229, 0.08) 100%)',
          border: '1px solid',
          borderColor: 'rgba(147, 51, 234, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0) 70%)',
          borderRadius: '50%'
        }} />
        <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 700, mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{ fontSize: '1.1rem' }}>👥</span>
          {t('form.dutyTeam.title')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'row', flexWrap: 'wrap' }}>
          {[t('form.dutyTeam.member1'), t('form.dutyTeam.member2')].map((member, i) => (
            <Box key={member} sx={{
              display: 'flex',
              alignItems: 'center',
              py: 0.8,
              px: 1.2,
              flexGrow: 1,
              bgcolor: 'background.paper',
              borderRadius: 2.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              border: '1px solid',
              borderColor: 'divider',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                borderColor: 'primary.light'
              }
            }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#44b700',
                    color: '#44b700',
                    boxShadow: '0 0 0 2px #fff',
                    width: 8,
                    height: 8,
                    minWidth: 8
                  }
                }}
              >
                <Avatar sx={{
                  bgcolor: i === 0 ? 'primary.main' : 'secondary.main',
                  width: 32,
                  height: 32,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  {member.charAt(0)}
                </Avatar>
              </Badge>
              <Box sx={{ ml: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.1, fontSize: '0.85rem' }}>
                  {member}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: 0.5, mt: 0.3, fontSize: '0.65rem' }}>
                  {t('form.dutyTeam.role')}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: 'background.default', borderRadius: 2 }}>
        <List disablePadding>
          {contacts.map((contact, index) => (
            <React.Fragment key={contact.label}>
              <ListItem sx={{ py: 1.5, px: 0, gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, bgcolor: 'action.selected', borderRadius: 1.5 }}>
                  {contact.icon}
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {contact.label}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary', mt: 0.5, fontFamily: 'monospace' }}>
                    {contact.value}
                  </Typography>
                </Box>
              </ListItem>
              {index < contacts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <InfoIcon sx={{ color: 'text.secondary' }} /> {t('sidebar.guidelineTitle')}
      </Typography>

      <List sx={{ pl: 1, pr: 0 }} disablePadding>
        {guidelines.map((guideline, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0, alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 24, height: 24, borderRadius: '50%', bgcolor: 'primary.light', color: 'primary.contrastText', mr: 2, mt: 0.5, fontSize: '0.75rem', fontWeight: 'bold' }}>
              {index + 1}
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.2 }}>
              {guideline}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}