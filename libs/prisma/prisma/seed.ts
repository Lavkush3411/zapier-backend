import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed TriggerType
  const triggerTypeWebhook = await prisma.triggerType.create({
    data: {
      id: '11111111-1111-1111-1111-111111111111',
      name: 'Webhook',
    },
  });

  const triggerTypeDatabaseChange = await prisma.triggerType.create({
    data: {
      id: '22222222-2222-2222-2222-222222222222',
      name: 'Database Change',
    },
  });

  // Seed TriggerSubType
  const triggerSubTypeHttp = await prisma.triggerSubType.create({
    data: {
      id: '33333333-3333-3333-3333-333333333333',
      name: 'HTTP Request',
      triggerTypeId: triggerTypeWebhook.id,
    },
  });

  const triggerSubTypeInsert = await prisma.triggerSubType.create({
    data: {
      id: '44444444-4444-4444-4444-444444444444',
      name: 'Insert',
      triggerTypeId: triggerTypeDatabaseChange.id,
    },
  });

  // Seed AvailableAction
  const availableActionEmail = await prisma.availableAction.create({
    data: {
      id: '55555555-5555-5555-5555-555555555555',
      name: 'Send Email',
    },
  });

  const availableActionNotification = await prisma.availableAction.create({
    data: {
      id: '66666666-6666-6666-6666-666666666666',
      name: 'Send Notification',
    },
  });

  // Seed Zaps
  const zapWebhook = await prisma.zap.create({
    data: {
      id: '77777777-7777-7777-7777-777777777777',
      name: 'Example Webhook Zap',
      triggerTypeId: triggerTypeWebhook.id,
      triggerSubTypeId: triggerSubTypeHttp.id,
    },
  });

  const zapDatabaseChange = await prisma.zap.create({
    data: {
      id: '88888888-8888-8888-8888-888888888888',
      name: 'Example Database Change Zap',
      triggerTypeId: triggerTypeDatabaseChange.id,
      triggerSubTypeId: triggerSubTypeInsert.id,
    },
  });

  // Seed Actions for Webhook Zap
  await prisma.action.createMany({
    data: [
      {
        id: '99999999-9999-9999-9999-999999999999',
        availableActionId: availableActionEmail.id,
        zapId: zapWebhook.id,
        sortingOrder: 1,
      },
      {
        id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        availableActionId: availableActionNotification.id,
        zapId: zapWebhook.id,
        sortingOrder: 2,
      },
    ],
  });

  // Seed Actions for Database Change Zap
  await prisma.action.createMany({
    data: [
      {
        id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        availableActionId: availableActionEmail.id,
        zapId: zapDatabaseChange.id,
        sortingOrder: 1,
      },
    ],
  });

  console.log('Seed data created!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
