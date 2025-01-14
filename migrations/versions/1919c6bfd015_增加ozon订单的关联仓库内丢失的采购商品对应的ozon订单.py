"""增加ozon订单的关联仓库内丢失的采购商品对应的ozon订单

Revision ID: 1919c6bfd015
Revises: 3659777be057
Create Date: 2025-01-07 13:54:01.255862

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1919c6bfd015'
down_revision = '3659777be057'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('purchase_product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('loss_for_ozon_order_id', sa.Text(), nullable=True))
        batch_op.create_foreign_key("ozon_order_loss_for_ozon_order_id", 'ozon_order', ['loss_for_ozon_order_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('purchase_product', schema=None) as batch_op:
        batch_op.drop_constraint("ozon_order_loss_for_ozon_order_id", type_='foreignkey')
        batch_op.drop_column('loss_for_ozon_order_id')

    # ### end Alembic commands ###
